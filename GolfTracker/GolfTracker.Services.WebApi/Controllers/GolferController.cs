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
    public class GolferController : Controller
    {
        public GolferController(ILogger<GolfClubController> logger)
        {
            _logger = logger;
        }

        private ILogger _logger;



        [HttpGet]
        public List<GolferInformation> GetGolfers()
        {
            const string message = "Could not get golfers.";
            try
            {
                using (var context = new GolfTrackerContext())
                {
                    var golferResults = context.Golfer
                        .AsNoTracking()
                        .Include("Rounds.GolfCoursePlayed.TeesPlayed")
                        .OrderBy(g => g.Name)
                        .ToList();

                    var golfers = new List<GolferInformation>();
                    foreach (var golfer in golferResults)
                    {
                        var golferInfo = mapEntityToInformation(golfer);
                        golfers.Add(golferInfo);
                    }

                    return golfers;
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
        public GolferInformation GetGolferById(Guid id)
        {
            const string message = "Could not get golfer by id.";
            try
            {
                using (var context = new GolfTrackerContext())
                {
                    var golferResult = context.Golfer
                        .AsNoTracking()
                        .Include("Rounds.GolfCoursePlayed.TeesPlayed")
                        .FirstOrDefault(c => c.Id == id);

                    var golfer = mapEntityToInformation(golferResult);

                    return golfer;
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
        public GolferInformation SaveGolfer([FromBody]GolferInformation golferToSave)
        {
            const string message = "Could not save golfer.";
            try
            {
                using (var context = new GolfTrackerContext())
                {
                    if (golferToSave.Id == Guid.Empty) golferToSave.Id = Guid.NewGuid();

                    var golfer = context.Golfer
                        .Include("Rounds.GolfCoursePlayed.TeesPlayed")
                        .FirstOrDefault(g => g.Id == golferToSave.Id);

                    if (golfer == null)
                    {
                        golfer = new Golfer { Id = golferToSave.Id };
                        context.Golfer.Add(golfer);
                    }

                    mapInformationToEntity(golferToSave, golfer, context);

                    context.SaveChanges();

                    return mapEntityToInformation(golfer);
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
        public void DeleteGolfer(Guid id)
        {
            const string message = "Could not delete golfer.";
            try
            {
                using (var context = new GolfTrackerContext())
                {
                    var golfer = context.Golfer
                        .FirstOrDefault(c => c.Id == id);

                    if (golfer != null)
                    {
                        context.Golfer.Remove(golfer);
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


        private GolferInformation mapEntityToInformation(Golfer golfer)
        {
            var newGolfer = new GolferInformation
            {
                Id = golfer.Id,
                UserName = golfer.UserName,
                Name = golfer.Name,
                Handicap = golfer.Handicap,
                IsPlus = golfer.IsPlus,
            };

            foreach (var round in golfer.Rounds)
            {
                var newRound = new RoundInformation
                {
                    Id = round.Id,
                    DatePlayed = round.DatePlayed,
                    Score = round.Score,
                    NetScore = round.NetScore,
                    GolfCourse = new GolfCoursePlayedInformation
                    {
                        Id = round.GolfCoursePlayedId,
                        GolfClubName = round.GolfCoursePlayed.GolfClubName,
                        GolfCourseName = round.GolfCoursePlayed.GolfCourseName,
                        TeePlayed = new TeePlayedInformation
                        {
                            Id = round.GolfCoursePlayed.TeesPlayed.FirstOrDefault().Id,
                            TeeName = round.GolfCoursePlayed.TeesPlayed.FirstOrDefault().TeeName,
                            Gender = round.GolfCoursePlayed.TeesPlayed.FirstOrDefault().Gender,
                            Length = round.GolfCoursePlayed.TeesPlayed.FirstOrDefault().Length,
                            Slope = round.GolfCoursePlayed.TeesPlayed.FirstOrDefault().Slope,
                            Rating = round.GolfCoursePlayed.TeesPlayed.FirstOrDefault().Rating,
                            Par = round.GolfCoursePlayed.TeesPlayed.FirstOrDefault().Par,
                        }
                    }
                };
                newGolfer.Rounds.Add(newRound);
            }

            return newGolfer;
        }

        private void mapInformationToEntity(GolferInformation golferToSave, Golfer golfer, GolfTrackerContext context)
        {
            golfer.Name = golferToSave.Name;
            golfer.UserName = golferToSave.UserName;
            golfer.IsPlus = golferToSave.IsPlus;
            golfer.Handicap = golferToSave.Handicap;

            foreach (var roundToSave in golferToSave.Rounds)
            {
                if (roundToSave.Id == Guid.Empty) roundToSave.Id = Guid.NewGuid();

                var round = golfer.Rounds
                    .FirstOrDefault(r => r.Id == roundToSave.Id);
                if (round == null)
                {
                    round = new Round { Id = roundToSave.Id };
                    golfer.Rounds.Add(round);
                }
                round.GolferId = golfer.Id;
                round.DatePlayed = roundToSave.DatePlayed;
                round.Score = roundToSave.Score;
                round.NetScore = roundToSave.NetScore;

                //Save course played
                var coursePlayedToSave = roundToSave.GolfCourse;
                if (coursePlayedToSave.Id == Guid.Empty) coursePlayedToSave.Id = Guid.NewGuid();

                var coursePlayed = round.GolfCoursePlayed;
                if (coursePlayed == null)
                {
                    coursePlayed = new GolfCoursePlayed { Id = coursePlayedToSave.Id };
                    round.GolfCoursePlayed = coursePlayed;
                    round.GolfCoursePlayedId = coursePlayed.Id;
                }
                coursePlayed.GolfClubName = roundToSave.GolfCourse.GolfClubName;
                coursePlayed.GolfCourseName = roundToSave.GolfCourse.GolfCourseName;

                //Save tee played
                var teePlayedToSave = coursePlayedToSave.TeePlayed;
                if (teePlayedToSave.Id == Guid.Empty) teePlayedToSave.Id = Guid.NewGuid();

                var teePlayed = coursePlayed.TeesPlayed.FirstOrDefault();
                if (teePlayed == null)
                {
                    teePlayed = new TeePlayed { Id = teePlayedToSave.Id };
                    coursePlayed.TeesPlayed.Add(teePlayed);
                }
                teePlayed.GolfCoursePlayedId = coursePlayed.Id;
                teePlayed.TeeName = teePlayedToSave.TeeName;
                teePlayed.Gender = teePlayedToSave.Gender;
                teePlayed.Length = teePlayedToSave.Length;
                teePlayed.Slope = teePlayedToSave.Slope;
                teePlayed.Rating = teePlayedToSave.Rating;
                teePlayed.Par = teePlayedToSave.Par;
            }
        }
    }
}
