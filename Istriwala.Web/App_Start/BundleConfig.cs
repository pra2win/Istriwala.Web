﻿using System.Web;
using System.Web.Optimization;

namespace Istriwala.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                     "~/Scripts/jquery-2.1.4.min.js",
                     "~/Scripts/bootstrap.min.js"
                     ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/core").Include(
                   "~/Scripts/Core/core.js",
                   "~/Scripts/Core/session.js",
                   //"~/Scripts/Core/utilities.js",
                   "~/Scripts/Core/wrappers.js",
                   // "~/Scripts/Core/koUtilities.js",
                   "~/Scripts/Core/global.js",
                   "~/Scripts/Core/globalInit.js"
               // "~/Scripts/Core/validation.js"
               ));

            bundles.Add(new ScriptBundle("~/bundles/login").Include(
                  "~/Scripts/Login/login.js"
                ));
        }
    }
}
