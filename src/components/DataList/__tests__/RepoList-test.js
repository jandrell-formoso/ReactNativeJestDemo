import { SEARCH_GITHUB_REPO, SEARCH_GITHUB_REPO_SUCCESS, searchQueryGitHub, SEARCH_GITHUB_REPO_ERROR } from "../actions";
import mockStore from "../../../../configureMockStore";

describe("RepoList actions", () => {
  it("should the user be defined", () => {
    const searchQuery = "react-native-video";
    const perPage = "&per_page=1";

    const store = mockStore({ repos: [] });
    const expectedAction = {
      type: SEARCH_GITHUB_REPO_SUCCESS,
      payload: {
        total_count: 372,
        incomplete_results: false,
        items: [
          {
            id: 33166041,
            node_id: "MDEwOlJlcG9zaXRvcnkzMzE2NjA0MQ==",
            name: "react-native-video",
            full_name: "react-native-community/react-native-video",
            owner: {
              login: "react-native-community",
              id: 20269980,
              node_id: "MDEyOk9yZ2FuaXphdGlvbjIwMjY5OTgw",
              avatar_url:
                "https://avatars1.githubusercontent.com/u/20269980?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/react-native-community",
              html_url: "https://github.com/react-native-community",
              followers_url:
                "https://api.github.com/users/react-native-community/followers",
              following_url:
                "https://api.github.com/users/react-native-community/following{/other_user}",
              gists_url:
                "https://api.github.com/users/react-native-community/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/react-native-community/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/react-native-community/subscriptions",
              organizations_url:
                "https://api.github.com/users/react-native-community/orgs",
              repos_url:
                "https://api.github.com/users/react-native-community/repos",
              events_url:
                "https://api.github.com/users/react-native-community/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/react-native-community/received_events",
              type: "Organization",
              site_admin: false
            },
            private: false,
            html_url:
              "https://github.com/react-native-community/react-native-video",
            description: "A <Video /> component for react-native",
            fork: false,
            url:
              "https://api.github.com/repos/react-native-community/react-native-video",
            forks_url:
              "https://api.github.com/repos/react-native-community/react-native-video/forks",
            keys_url:
              "https://api.github.com/repos/react-native-community/react-native-video/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/react-native-community/react-native-video/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/react-native-community/react-native-video/teams",
            hooks_url:
              "https://api.github.com/repos/react-native-community/react-native-video/hooks",
            issue_events_url:
              "https://api.github.com/repos/react-native-community/react-native-video/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/react-native-community/react-native-video/events",
            assignees_url:
              "https://api.github.com/repos/react-native-community/react-native-video/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/react-native-community/react-native-video/branches{/branch}",
            tags_url:
              "https://api.github.com/repos/react-native-community/react-native-video/tags",
            blobs_url:
              "https://api.github.com/repos/react-native-community/react-native-video/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/react-native-community/react-native-video/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/react-native-community/react-native-video/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/react-native-community/react-native-video/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/react-native-community/react-native-video/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/react-native-community/react-native-video/languages",
            stargazers_url:
              "https://api.github.com/repos/react-native-community/react-native-video/stargazers",
            contributors_url:
              "https://api.github.com/repos/react-native-community/react-native-video/contributors",
            subscribers_url:
              "https://api.github.com/repos/react-native-community/react-native-video/subscribers",
            subscription_url:
              "https://api.github.com/repos/react-native-community/react-native-video/subscription",
            commits_url:
              "https://api.github.com/repos/react-native-community/react-native-video/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/react-native-community/react-native-video/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/react-native-community/react-native-video/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/react-native-community/react-native-video/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/react-native-community/react-native-video/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/react-native-community/react-native-video/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/react-native-community/react-native-video/merges",
            archive_url:
              "https://api.github.com/repos/react-native-community/react-native-video/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/react-native-community/react-native-video/downloads",
            issues_url:
              "https://api.github.com/repos/react-native-community/react-native-video/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/react-native-community/react-native-video/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/react-native-community/react-native-video/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/react-native-community/react-native-video/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/react-native-community/react-native-video/labels{/name}",
            releases_url:
              "https://api.github.com/repos/react-native-community/react-native-video/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/react-native-community/react-native-video/deployments",
            created_at: "2015-03-31T05:08:38Z",
            updated_at: "2018-07-25T22:01:29Z",
            pushed_at: "2018-07-25T20:18:03Z",
            git_url:
              "git://github.com/react-native-community/react-native-video.git",
            ssh_url:
              "git@github.com:react-native-community/react-native-video.git",
            clone_url:
              "https://github.com/react-native-community/react-native-video.git",
            svn_url:
              "https://github.com/react-native-community/react-native-video",
            homepage: "https://www.npmjs.com/package/react-native-video",
            size: 10400,
            stargazers_count: 3127,
            watchers_count: 3127,
            language: "Java",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 1035,
            mirror_url: null,
            archived: false,
            open_issues_count: 396,
            license: {
              key: "mit",
              name: "MIT License",
              spdx_id: "MIT",
              url: "https://api.github.com/licenses/mit",
              node_id: "MDc6TGljZW5zZTEz"
            },
            forks: 1035,
            open_issues: 396,
            watchers: 3127,
            default_branch: "master",
            score: 217.74516
          }
        ]
      }
    };
    return store.dispatch(searchQueryGitHub(searchQuery + perPage)).then(() => {
      expect(store.getActions()).toBeDefined();
    });
  });
});
