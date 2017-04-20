using System;
using System.Text;

namespace GolfTracker.Services.WebApi
{
    public static class ExceptionHelper
    {
        public static string ExceptionToString(Exception ex, string initialMessage = "")
        {
            initialMessage = "** " + initialMessage + " " + DateTime.Now.ToString();
            var sb = new StringBuilder();
            sb.AppendLine(initialMessage);
            while (ex != null)
            {
                sb.AppendLine(ex.Message);
                sb.AppendLine(ex.StackTrace);
                sb.AppendLine();
                ex = ex.InnerException;
            }
            return sb.ToString();
        }
    }
}
