---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags:
  - javascript
date: 2015-09-17 07:41:59 -0600
title: Mock your Dojo AMD modules with StubModule.js
categories:
  - Developer
---

When testing AMD modules it is sometimes necessary to verify how it interacts with it&#39;s dependencies. For example, you might be writing a module that makes XHR requests using [dojo/request](https://dojotoolkit.org/reference-guide/dojo/request.html#dojo-request) and you want to make sure that it&#39;s passing the correct parameters. How would you test this? Creating a wrapper around the request method in your module and then spying on that method would work. You could also store the request method as a property of your module and spy on that in your tests. However, both of these solutions lead to messy code and there&#39;s something that feels wrong to me when adding code to production modules just for testing purposes.

You might think that it would be as easy as adding a [map config to the Dojo loader](https://dojotoolkit.org/reference-guide/loader/amd.html#id9) and pointing dojo/request to a mocked module. While this is a possible solution it means that you have to create a separate file for each mock that you use and it gets very messy if you want to mock the same module multiple times within a single test page (since modules are cached by the loader).

[StubModule.js](https://github.com/agrc/StubModule) provides a cleaner way to solve this problem. It allows you to stub modules with no dependencies on external files and no side effects to pollute your other tests. It does this by using the map config mentioned above as well as [require.undef](https://dojotoolkit.org/reference-guide/loader/amd.html#id12) which is a Dojo-specific method that removes a module from the cache.

Using this tool is fairly straight forward. stub-module.js returns a single method that accepts two parameters. The first is the module identifier (MID) of the module that you want to test. The second is an object with keys that are MID&#39;s of the dependencies that you want to mock and values that are the mocked returned values. The method returns a [promise](https://dojotoolkit.org/reference-guide/dojo/promise.html) that resolves with the stubbed module. For example (using [Jasmine](http://jasmine.github.io/)):

``` js
it('this is a demo', function (done) {
    var stub = jasmine.createSpy('request');
    stubModule('test/Module', {'dojo/request': stub}).then(function (StubbedModule) {
        var testObject = new StubbedModule();
        testObject.makeRequest();

        expect(stub).toHaveBeenCalledWith('some/url');

        done();
    });
});
```

To be honest I was surprised that I couldn&#39;t find an existing project that met my use case before I wrote this project. Did I miss something? Also, I wonder if the API of this project could be simplified. Any suggestions?
