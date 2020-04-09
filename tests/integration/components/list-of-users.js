import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';



module('Integration | Component | list-of-users', function(hooks) {

  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    const userDataTest = [

      {

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

      },

      {

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

      await render(hbs`{{list-of-users userData = model.userData onToShortlistRoute='onToShortlistRoute'
      onClickofUser= 'onClickofUser'}}`);
      assert.equal(userDataTest, userData, 'userData is fetched');
    });

  });
