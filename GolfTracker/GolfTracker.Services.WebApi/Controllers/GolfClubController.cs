using GolfTracker.Services.WebApi.Contracts;
using GolfTracker.Services.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GolfTracker.Services.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class GolfClubController : Controller
    {
        public GolfClubController(ILogger<GolfClubController> logger)
        {
            _logger = logger;
        }

        private ILogger _logger;



        [HttpGet]
        public List<GolfClubInformation> GetGolfClubs()
        {
            const string message = "Could not save golf clubs.";
            try
            {
                using (var context = new GolfTrackerContext())
                {
                    var golfClubResults = context.GolfClub
                        .AsNoTracking()
                        .Include("GolfCourses.Tees")
                        .OrderBy(c => c.Name)
                        .ToList();

                    var clubs = new List<GolfClubInformation>();
                    foreach (var club in golfClubResults)
                    {
                        var golfClubInfo = mapEntityToInformation(club);
                        clubs.Add(golfClubInfo);
                    }

                    return clubs;
                }
            }
            catch (Exception ex)
            {
                var exMessage = ExceptionHelper.ExceptionToString(ex, message);
                _logger.LogCritical(exMessage);
                return null;
            }
        }

        [Route("{id:Guid}")]
        [HttpGet]
        public GolfClubInformation GetGolfClubById(Guid id)
        {
            const string message = "Could not get golf club by id.";
            try
            {
                GolfClubInformation newClub = null;
                using (var context = new GolfTrackerContext())
                {
                    var golfClub = context.GolfClub
                        .AsNoTracking()
                        .Include("GolfCourses.Tees")
                        .FirstOrDefault(c => c.Id == id);

                    if (golfClub != null) newClub = mapEntityToInformation(golfClub);
                    return newClub;
                }
            }
            catch (Exception ex)
            {
                var exMessage = ExceptionHelper.ExceptionToString(ex, message);
                _logger.LogCritical(exMessage);
                return null;
            }
        }

        [HttpPut]
        [HttpPost]
        public GolfClubInformation SaveGolfClub([FromBody]GolfClubInformation golfClubToSave)
        {
            const string message = "Could not save golf club.";
            try
            {
                using (var context = new GolfTrackerContext())
                {
                    if (golfClubToSave.Id == Guid.Empty) golfClubToSave.Id = Guid.NewGuid();

                    var golfClub = context.GolfClub
                        .Include("GolfCourses.Tees")
                        .FirstOrDefault(c => c.Id == golfClubToSave.Id);

                    if (golfClub == null)
                    {
                        golfClub = new GolfClub { Id = golfClubToSave.Id };
                        context.GolfClub.Add(golfClub);
                    }

                    mapInformationToEntity(golfClubToSave, golfClub, context);

                    context.SaveChanges();

                    return mapEntityToInformation(golfClub);
                }
            }
            catch (Exception ex)
            {
                var exMessage = ExceptionHelper.ExceptionToString(ex, message);
                _logger.LogCritical(exMessage);
                return null;
            }
        }

        [Route("{id:Guid}")]
        [HttpDelete]
        public void DeleteGolfClub(Guid id)
        {
            const string message = "Could not delete golf club.";
            try
            {
                using (var context = new GolfTrackerContext())
                {
                    var golfClub = context.GolfClub
                        .FirstOrDefault(c => c.Id == id);

                    if (golfClub != null)
                    {
                        context.GolfClub.Remove(golfClub);
                        context.SaveChanges();
                    }
                }
            }
            catch (Exception ex)
            {
                var exMessage = ExceptionHelper.ExceptionToString(ex, message);
                _logger.LogCritical(exMessage);
            }
        }


        private static GolfClubInformation mapEntityToInformation(GolfClub club)
        {
            var newClub = new GolfClubInformation
            {
                Id = club.Id,
                Name = club.Name,
                Location = club.Location,
            };

            foreach (var course in club.GolfCourses)
            {
                var newCourse = new GolfCourseInformation
                {
                    Id = course.Id,
                    Name = course.Name,
                };
                newClub.GolfCourses.Add(newCourse);

                foreach (var tee in course.Tees)
                {
                    var newTee = new TeeInformation
                    {
                        Id = tee.Id,
                        TeeName = tee.TeeName,
                        Gender = tee.Gender,
                        Length = tee.Length,
                        Slope = tee.Slope,
                        Rating = tee.Rating,
                        Par = tee.Par,
                    };
                    newCourse.Tees.Add(newTee);
                }
            }

            return newClub;
        }

        private static void mapInformationToEntity(GolfClubInformation golfClubToSave, GolfClub golfClub, GolfTrackerContext context)
        {
            golfClub.Name = golfClubToSave.Name;
            golfClub.Location = golfClubToSave.Location;

            foreach (var courseToSave in golfClubToSave.GolfCourses)
            {
                if (courseToSave.Id == Guid.Empty) courseToSave.Id = Guid.NewGuid();

                var course = golfClub.GolfCourses
                    .FirstOrDefault(c => c.Id == courseToSave.Id);
                if (course == null)
                {
                    course = new GolfCourse { Id = courseToSave.Id };
                    golfClub.GolfCourses.Add(course);
                }
                course.GolfClubId = golfClub.Id;
                course.Name = courseToSave.Name;

                foreach (var teeToSave in courseToSave.Tees)
                {
                    if (teeToSave.Id == Guid.Empty) teeToSave.Id = Guid.NewGuid();

                    var tee = course.Tees
                        .FirstOrDefault(t => t.Id == teeToSave.Id);
                    if (tee == null)
                    {
                        tee = new Tee { Id = teeToSave.Id };
                        course.Tees.Add(tee);
                    }
                    tee.GolfCourseId = course.Id;
                    tee.TeeName = teeToSave.TeeName;
                    tee.Gender = teeToSave.Gender;
                    tee.Length = teeToSave.Length;
                    tee.Par = teeToSave.Par;
                    tee.Rating = teeToSave.Rating;
                    tee.Slope = teeToSave.Slope;
                }

                //remove deleted tees;
                foreach (var tee in course.Tees)
                    if (!courseToSave.Tees.Any(t => t.Id == tee.Id)) context.Entry(tee).State = EntityState.Deleted;
            }

            //remove deleted courses
            foreach (var course in golfClub.GolfCourses)
                if (!golfClubToSave.GolfCourses.Any(c => c.Id == course.Id)) context.Entry(course).State = EntityState.Deleted;
        }
    }
}
