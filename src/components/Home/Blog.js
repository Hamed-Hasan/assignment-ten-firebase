import React from "react";

const Blog = () => {
  return (
    <div className="mt-32">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">
          Three Difference between `authorization` and `authentication`
        </h2>
        <div className="grid blog gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 mb-14 p-6 border border-gray-100 rounded-xl bg-gray-100 text-center sm:p-8">
            <div className=" flex flex-col justify-center mb-0">
              <p className="text-gray-600 md:text-xl">
                {" "}
                <span className="font-serif">"</span>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    <b>What is Authentication</b>
                  </h6>
                </div>
                Authentication is the process of identifying users and
                validating who they claim to be. One of the most common and
                obvious factors to authenticate identity is a password. If the
                user name matches the password credential, it means the identity
                is valid, and the system grants access to the user. In
                authentication process, the identity of users are checked for
                providing the access to the system. In authentication process,
                users or persons are verified. t is done before the
                authorization process. Authentication determines whether the
                person is user or not. What is Authorization Authorization
                happens after a user’s identity has been successfully
                authenticated. It is about offering full or partial access
                rights to resources like database, funds, and other critical
                information to get the job done. While in authorization process,
                person’s or user’s authorities are checked for accessing the
                resources. While in this process, users or persons are
                validated. While it needs user’s privilege or security levels.
                hile it determines What permission do user have? need some sort
                of access control. And Firebase databases will notify you if you
                don’t have a minimum of access control. The minimum access
                control in Firebase world it will the database rules. If you
                don’t use access control, you will let the door open for users
                getting access to foreign data. For many applications the
                minimum level will be enough. And you don’t need roles and
                different level of access every time. But if you have different
                use cases for the users, or different levels made for them, it
                will be necessary for you to handle the authorization. The rules
                of the database will help you a little, but you have to enhance
                the identity platform. You could use a third party user and role
                database, and connect it with Firebase. Or you could use
                Firebase and define a collection of users and also combine it
                with the new custom claims and make a cloud function that will
                be the glue for the whole system. using the phone number
                verification provided by Firebase. It is an easy way to let your
                users access your app without using a social media third party
                login. However, Firebase inform you, that if you only use phone
                verification and a one time password (OTP), it will not be
                considered safe, compared to other solutions that use multi
                factor authentication.
                <span className="font-serif">"</span>
              </p>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-xl bg-gray-100 sm:flex sm:space-x-8 sm:p-8">
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <div>
                <h6 className="text-lg font-semibold leading-none">
                  <b>Why are using `firebase`?</b>
                </h6>
              </div>
              <p className="text-gray-600">
                {" "}
                <span className="font-serif">"</span>
                What other options do you have to implement authentication?
                Firebase Authentication is a powerful and reasonably easy to use
                tool that gives you(r app) the ability to authenticate your
                users using their preferred auth mechanism (rather than your
                proprietary system requiring your users to remember passwords
                for myriad sites). If your users already have a Google,
                Microsoft, Facebook, Apple etc. account, enabling the relevant
                subset from these "additional providers" adds very little
                overhead to your code but increases the chances your users will
                already have an account that they can use. In addition, because
                e.g. Google, Microsoft, Facebook, Apple is handling
                authentication for you, your app becomes simpler and, unless you
                choose the native providers (phone, email) (which you should
                probably not do) you don't have to take on the burden in being
                diligent in managing your users' credential (e.g. email,
                passwords etc). Usually, authentication by a server entails the
                use of a user name and password. Other ways to authenticate can
                be through cards, retina scans, voice recognition, and
                fingerprints. 5 Common Authentication Types Password-based
                authentication. Passwords are the most common methods of
                authentication. ... Multi-factor authentication. ...
                Certificate-based authentication. ... Biometric authentication.
                ... Token-based authentication.
                <span className="font-serif">"</span>
              </p>
            </div>
          </div>
          <div className="p-6 border mb-20 border-gray-100 rounded-xl bg-gray-100 sm:flex sm:space-x-8 sm:p-8">
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <h6 className="text-lg font-semibold leading-none">
                {" "}
                What other services does `firebase` provide?
              </h6>
              <p className="text-gray-600">
                {" "}
                <span className="font-serif">"</span> other than authentication
                Firebase is originally developed by Firebase inc and later
                acquired by Google. It provides different kinds of services that
                help you to develop high-quality mobile and web applications to
                grow your business. It is compatible with Web, iOS, Android, and
                OS X clients. With Firebase, developers don’t need to worry
                about the backend programming, Authentication, API development,
                database (real-time cloud-hosted NoSQL database and cloud
                firestore), File storage, etc. Firebase provides all the
                services with very efficient and fast performance. Firebase is a
                full package that can help in developing your mobile or web
                applications faster with fewer resources and more efficiency.
                Now, let’s look at some of the services and use of it. There are
                many services which Firebase provides, Most useful of them are:
                Cloud Firestore Cloud Functions Authentication Hosting Cloud
                Storage Google Analytics Predictions Cloud Messaging Dynamic
                Links Remote Config Firebase is a full package that can help in
                developing your mobile or web applications faster with fewer
                resources and more efficiency. Now, let’s look at some of the
                services and use of it. This article purely focuses on how
                firebase services can make the mobile application development
                process easier. We know that the widely used services for this
                purpose are Cloud Messaging, Authentication, Dynamic Links,
                Predictions, Google Analytics, and Remote Config. Let’s discuss
                these services in detail.
                <span className="font-serif">"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
