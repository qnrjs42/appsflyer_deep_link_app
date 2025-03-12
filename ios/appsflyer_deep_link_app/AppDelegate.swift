import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import AppsFlyerLib

@main
class AppDelegate: RCTAppDelegate {
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "appsflyer_deep_link_app"
    self.dependencyProvider = RCTAppDependencyProvider()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
    #if DEBUG
        RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
    #else
        Bundle.main.url(forResource: "main", withExtension: "jsbundle")
    #endif
  }

  // Open URI-scheme for iOS 9 and above
  override func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
      AppsFlyerLib.shared().handleOpen(url, options: options)
      return super.application(app, open: url, options: options)
  }

  // Open URI-scheme for iOS 8 and below (Fixed argument label issue)
  override func application(_ application: UIApplication, open url: URL, sourceApplication: String?, annotation: Any) -> Bool {
      AppsFlyerLib.shared().handleOpen(url, sourceApplication: sourceApplication, withAnnotation: annotation)
      return super.application(application, open: url, sourceApplication: sourceApplication, annotation: annotation)
  }

  // Open Universal Links
  override func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
      AppsFlyerLib.shared().continue(userActivity) { objects in
          restorationHandler(objects as? [UIUserActivityRestoring])
      }
      return super.application(application, continue: userActivity, restorationHandler: restorationHandler)
  }
}
