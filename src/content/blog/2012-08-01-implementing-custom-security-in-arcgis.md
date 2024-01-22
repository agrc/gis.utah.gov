---
author:
  display_name: Steve Gourley
  email: sgourley@utah.gov
tags:
  - developer
  - security
published: false
date: 2012-08-01 13:36:00 -0600
title: Implementing custom security in ArcGIS
categories:
  - Developer
---
<p>Securing ArcGIS services is often an after thought. I can speak from experience when saying that unchecking the box to 'Enable Web Access' on a map service was thought to be enough smoke and mirrors to secure a service behind a login screen. After all, if a person can't see the service in the REST services directory or when connected to the server via ArcCatalog, then that service must be secure. </p>
<p>ArcGIS Server, by design, is multitenanted in the sense that one server is handling requests for many different applications and users. All of these applications have separate requirements and user bases and this is where the default install of ArcGIS Server breaks down.</p>
<p>By default ArcGIS Server does not enable security. Retrofitting security is a bit of a pain because you need to schedule down time; When you enable security, all of your services become unreachable. To re-allow access to them you need to add the 'Everyone' role to the allowed roles for all services. This gives the services the same functional state as before security was enabled.</p>
<p>ArcGIS Server allows you to use the same ASP.NET membership and role provider for the default instance - ArcGIS. I'm going to exclude any authentication that is not database driven in this article. This setting is great if you have the same user base for all of the applications using ArcGIS Server, but how realistic is that?</p>
<p>In our agency, we create applications for other agencies, for the public, and for ourselves. The applications built for other agencies usually have unique sets of users. Since we are using the same ArcGIS Server for all of these applications, we needed a solution for securing these applications against unique databases.</p>
<p>To accomplish this we have to run multiple instances of ArcGIS Server. When I say that, I mean we use the utility which can be found at <code>C:\Program Files (x86)\ArcGIS\DotNet\AddInstance.exe for 9.3<br />
or<br />
C:\Program Files (x86)\ArcGIS\Server10.0\DotNet\AddInstance.exe for version 10</code> to create separate virtual directories in IIS for handling requests. Our convention is to use ArcGIS_%ApplicationName% to keep things organized.</p>
<p>Assuming that security is enabled and the token service is also enabled for ArcGIS Server, we then have to dive into XML web.config editing. The four web.config files we modify are inside the ArcGIS_%ApplicationName% folder in IIS. These paths are </p>
<p><code>rest/web.config<br />
Security/web.config<br />
Services/web.config<br />
Tokens/web.config</code></p>
<p>Inside all of these web config files we have to add our connection string to the database that holds our users credentials in the standard manor. </p>
<p><code><configuration><br />
    <connectionStrings><br />
        <add connectionString="" name="CustomConnectionStringName" /><br />
    </connectionStrings><br />
    ...<br />
</configuration></code></p>
<p>Starting with the rest web.config, I will usually update the <code><appSettings></code> key for TokenServiceURL since that can point to a machine name instead of a domain name.  If you are not using SSL, then you will also need to add the key <code><add key="RequireSSL" value="False" /></code> to <code><appSettings></code> </p>
<p>From my reverse engineering efforts, I've noticed that the rest service only makes use of a Role Provider. It also only invokes the Initialize and GetRolesForUser methods on the role provider. Add the ASP.NET role manager in the standard manor.</p>
<p><code><system.web><br />
    <roleManager enabled="true" defaultProvider="CustomRoleProvider"></p>
<providers>
        <clear /><br />
        <add connectionStringName="CustomConnectionStringName" applicationName="/"<br />
          name="CustomRoleProvider" type="Custom DLL QualifiedName, Custom DLL Namespace" />
      </providers>
    </roleManager><br />
    ...<br />
</system.web><br />
</code><br />
If you are using a database registered to be a ASP.NET Membership database, you can use the default System.Web.Security.SqlRoleProvider provider. You will additionally need to set the applicationName so it finds the right users. </p>
<p>If you are using a custom provider you can register it in the GAC or place the .dll's in a bin directory inside the token folder and the dll's will be discovered. </p>
<p><code>/rest/bin/customProvider.dll</code></p>
<p>The Security virtual directory is used by ArcGIS Server Manager. It allows you to add your roles to your services. It only uses a role provider so you can mimic the settings on the rest web.config file. You only need to implement the GetAllRoles method on the role provider. Additionally, you need to change the authentication mode to 'Forms'.</p>
<p><code><system.web><br />
    <authentication mode="Forms"></p>
<forms loginUrl="login.aspx" path="/" />
    </authentication><br />
    ...<br />
</system.web></code></p>
<p>Moving on to the Services web.config file. This virtual directory handles SOAP requests. You can ignore modifying this file if you aren't using SOAP. We don't use it so I'm not sure what providers it needs.  But to be safe, add your role provider and membership provider. We also lower the <code><appSettings></code> key GCInterval to 750 and update the TokenServiceURL.</p>
<p>Finally, we have to modify the Token services web.config. The token service requires only a membership provider and it invokes the Initialize and ValidateUser methods. We modify the <code><appSettings></code> keys TokenServiceURL and RequireSSL and we add our membership provider in the standard ASP.NET fashion.</p>
<p><code><system.web><br />
<membership defaultProvider="CustomMembershipProvider"></p>
<providers>
    <clear /><br />
    <add connectionStringName="CustomConnectionStringname" enablePasswordRetrieval="false"<br />
      enablePasswordReset="false" requiresQuestionAndAnswer="false"<br />
      applicationName="/" requiresUniqueEmail="false" passwordFormat="Clear"<br />
      maxInvalidPasswordAttempts="20" minRequiredPasswordLength="7"<br />
      minRequiredNonalphanumericCharacters="1" passwordAttemptWindow="10"<br />
      passwordStrengthRegularExpression="" name="CustomMembershipProvider"<br />
      type="Custom DLL QualifiedName, Custom DLL Namespace" />
  </providers>
</membership><br />
...<br />
</system.web></code></p>
<p>Once again, you can register your dll with the GAC or place the files in </p>
<p><code>/Tokens/bin/customProvider.dll</code></p>
<p>After going through all of these steps, open ArcGIS Manager and navigate to your services. Then click on the lock icon and add the roles you want to grant access to.</p>
<p>To test your service try out this simple script.</p>
<p><script src="https://gist.github.com/3230058.js"> </script></p>
