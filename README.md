# import env from pr comment

A Github action to import environment variables from github pull request comment

## Usage

- Requires the `GITHUB_TOKEN` secret.
- Supports `pull_request` event types.

### Sample workflow

```yaml
on:
  pull_request:

jobs:
  example:
    runs-on: ubuntu-latest
    steps:
    - name: example
      uses: dhanvi/import-env-from-pr-comment@master
```

### Data in PR comment

* Data in below format is expected in the pr description, first comment only, if you need to update environment variable you can always update the description and re-trigger the action.

```
```json
{
    "ENV1": "ENV_VALUE_1",
    "ENV2": "ENV_VALUE_2",
}
```

* It is suggested to create a PR template in the repo by adding the above data in the file `.github/pull_request_template.md`
