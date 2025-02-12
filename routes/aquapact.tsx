const Index = () => {
  return (
    <>
      <div className="page">
        <div className="header">
          <div className="container">
            <p className="title text-2xl font-bold">
              Privacy Policy for AquaPact
            </p>
          </div>
        </div>
        <div className="translations-content-container">
          <div className="container">
            <div
              className="tab-content translations-content-item en visible"
              id="en"
            >
              <h1 className="text-3xl font-bold my-4">Privacy Policy</h1>
              <p className="text-sm">Last updated: February 12, 2025</p>
              <p className="text-base text-justify">
                AquaPact ("we", "our", "us") is a water intake tracker app designed to help you manage your daily hydration goals. This Privacy Policy explains how we handle your data when you use AquaPact.
              </p>
              <h2 className="text-2xl font-semibold my-4 text-center">
                Data Collection and Usage
              </h2>
              <p className="text-base text-justify">
                AquaPact does not require user authentication and does not collect any personal information. All data related to your water intake, wakeup and sleep times, daily hydration goals, notifications, daily records, and last seven days stats are stored locally on your device.
              </p>
              <h3 className="text-lg font-semibold text-left my-2">
                Local Data Storage
              </h3>
              <ul className="list-disc list-outside">
                <li>
                  <p className="text-base">
                    <strong>Wakeup and Sleep Times:</strong> Configured wakeup and sleep times are stored locally on your device to help manage your hydration schedule.
                  </p>
                </li>
                <li>
                  <p className="text-base">
                    <strong>Daily Hydration Goal:</strong> Your daily target hydration goal is stored locally to track your progress.
                  </p>
                </li>
                <li>
                  <p className="text-base">
                    <strong>Notifications:</strong> Configured notification times are stored locally to remind you to drink water.
                  </p>
                </li>
                <li>
                  <p className="text-base">
                    <strong>Daily Records:</strong> Your daily water intake records are stored locally to provide you with accurate tracking.
                  </p>
                </li>
                <li>
                  <p className="text-base">
                    <strong>Last Seven Days Stats:</strong> Statistics for the last seven days are stored locally to help you monitor your hydration trends.
                  </p>
                </li>
              </ul>
              <h2 className="text-2xl font-semibold my-4 text-center">
                Data Sharing
              </h2>
              <p className="text-base text-justify">
                AquaPact does not share your data with any third parties. All data remains on your device and is not transmitted to any external servers or services.
              </p>
              <h2 className="text-2xl font-semibold my-4 text-center">
                Data Security
              </h2>
              <p className="text-base text-justify">
                We prioritize the security of your data. Since all data is stored locally on your device, it is protected by your device's security measures. We recommend using a secure password or biometric authentication to protect your device.
              </p>
              <h2 className="text-2xl font-semibold my-4 text-center">
                Changes to This Privacy Policy
              </h2>
              <p className="text-base text-justify">
                We may update this Privacy Policy from time to time. Any changes will be posted within the app, and we encourage you to review this policy periodically.
              </p>
              <h2 className="text-2xl font-semibold my-4 text-center">
                Contact Us
              </h2>
              <p className="text-base text-justify">
                If you have any questions or concerns about this Privacy Policy, please contact us at miche.atucha@gmail.com
              </p>
              <p className="text-base text-justify">
                By using AquaPact, you agree to the terms of this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
