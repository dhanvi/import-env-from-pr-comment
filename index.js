const core = require('@actions/core');
const github = require('@actions/github');
const codedown = require('codedown')

const context = github.context;

async function run() {
  const repoToken = core.getInput('GITHUB_TOKEN');
  const octokit = github.getOctokit(repoToken);

  try {
    const comment = await octokit.issues.get({
      ...context.repo,
      issue_number: context.payload.number
    });

    body = comment.data.body
    json_data = codedown(body, "json")
    console.log(json_data)

    json_data_parsed = JSON.parse(json_data)

    for (const [key, value] of Object.entries(json_data_parsed)) {
      core.exportVariable(key, value);
      console.log(key, value);
    }

  } catch (ex) {
    console.error(ex, context);
    throw ex;
  }
}

run();
