'use strict';

define('user-directory/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/file-upload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/file-upload.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n14:11 - Unexpected console statement. (no-console)\n23:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
});
define('user-directory/tests/integration/components/file-upload-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | file-upload', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "aj90Kxhq",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"file-upload\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "YyP7xmNI",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"file-upload\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('user-directory/tests/integration/components/list-of-users', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | list-of-users', function (hooks) {

    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      const userDataTest = [{

        "login": "mojombo",

        "id": 1,

        "node_id": "MDQ6VXNlcjE=",

        "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",

        "gravatar_id": "",

        "url": "https://api.github.com/users/mojombo",

        "html_url": "https://github.com/mojombo",

        "followers_url": "https://api.github.com/users/mojombo/followers",

        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",

        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",

        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",

        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",

        "organizations_url": "https://api.github.com/users/mojombo/orgs",

        "repos_url": "https://api.github.com/users/mojombo/repos",

        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",

        "received_events_url": "https://api.github.com/users/mojombo/received_events",

        "type": "User",

        "site_admin": false

      }, {

        "login": "defunkt",

        "id": 2,

        "node_id": "MDQ6VXNlcjI=",

        "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",

        "gravatar_id": "",

        "url": "https://api.github.com/users/defunkt",

        "html_url": "https://github.com/defunkt",

        "followers_url": "https://api.github.com/users/defunkt/followers",

        "following_url": "https://api.github.com/users/defunkt/following{/other_user}",

        "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",

        "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",

        "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",

        "organizations_url": "https://api.github.com/users/defunkt/orgs",

        "repos_url": "https://api.github.com/users/defunkt/repos",

        "events_url": "https://api.github.com/users/defunkt/events{/privacy}",

        "received_events_url": "https://api.github.com/users/defunkt/received_events",

        "type": "User",

        "site_admin": true

      }];

      assert.expect(1);

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "nVkxAjQL",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"list-of-users\",null,[[\"userData\",\"onToShortlistRoute\",\"onClickofUser\"],[[20,[\"model\",\"userData\"]],\"onToShortlistRoute\",\"onClickofUser\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(userDataTest, userData, 'userData is fetched');
    });
  });
});
define('user-directory/tests/test-helper', ['user-directory/app', 'user-directory/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('user-directory/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/file-upload-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/file-upload-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-of-users.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'integration/components/list-of-users.js should pass ESLint\n\n100:34 - \'userData\' is not defined. (no-undef)');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
});
define('user-directory/tests/unit/controllers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('user-directory/tests/unit/routes/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define('user-directory/config/environment', [], function() {
  var prefix = 'user-directory';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('user-directory/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
