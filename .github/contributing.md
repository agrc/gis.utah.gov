# UGRC website contributing guide

Thank you for your interest in contributing to the UGRC website. Before you proceed, briefly go through the following:

- [Code of Conduct](https://github.com/agrc/gis.utah.gov/blob/HEAD/CODE_OF_CONDUCT.md)
- [Contributing](#contributing)
- [Getting started](#getting-started)
  - [CLI Commands](#cli-commands)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Policy](#pull-request-policy)

## Contributing

Any individual is welcome to contribute to the UGRC website.

## Getting started

The steps below will give you a general idea of how to prepare your local environment for the UGRC website and general steps
for getting things done and landing your contribution.

1. Click the fork button in the top right to clone the [UGRC website Repository](https://github.com/agrc/gis.utah.gov/fork)

2. Clone your fork using SSH, GitHub CLI, or HTTPS.

   ```bash
   git clone git@github.com:<YOUR_GITHUB_USERNAME>/gis.utah.gov.git # SSH
   git clone https://github.com/<YOUR_GITHUB_USERNAME>/gis.utah.gov.git # HTTPS
   gh repo clone <YOUR_GITHUB_USERNAME>/gis.utah.gov # GitHub CLI
   ```

3. Change into the gis.utah.gov directory.

   ```bash
   cd gis.utah.gov
   ```

4. Create a remote to keep your fork and local clone up-to-date.

   ```bash
   git remote add upstream git@github.com:agrc/gis.utah.gov.git # SSH
   git remote add upstream https://github.com/agrc/gis.utah.gov.git # HTTPS
   gh repo sync agrc/gis.utah.gov # GitHub CLI
   ```

5. Create a new branch for your work.

   ```bash
   git checkout -b name-of-your-branch
   ```

6. Run the following to install the dependencies and start a local preview of your work.

   ```bash
   npm ci # installs this project's dependencies
   npm start # starts a preview of your local changes
   ```

7. Perform your changes. In case you're unfamiliar with the structure of this repository, we recommend that you review the [Collaborator Guide](.github/collaborating.md).

8. Perform a rebase to sync your current branch with the upstream branch.

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

9. Run `npm run format` to confirm that linting and formatting are passing.

   ```bash
   npm run format
   ```

10. Once you're happy with your changes, add and commit them to your branch, then push the branch to your fork.

    ```bash
    cd ~/gis.utah.gov
    git add .
    git commit -m "some message"
    git push -u origin name-of-your-branch
    ```

    > [!IMPORTANT]\
    > Before committing and opening a Pull Request, please go first through our [Commit](#commit-guidelines) and [Pull Request](#pull-request-policy) guidelines outlined below.

11. Create a Pull Request.

### CLI Commands

This repository contains several scripts and commands for performing numerous tasks. The most relevant ones are described below.

<details>
  <summary>Commands for Running & Building the Website</summary>

- `npm start` runs Astro's Local Development Server, listening by default on `http://localhost:4321/`.
- `npm run build` builds the Application on Production mode. The output is by default within `dist` folder.
  - This is used for the Netlify Deployments (Preview & Production)
- `npm run preview` runs Astro's Local Server pointed at the `dist` folder.

</details>

<details>
  <summary>Commands for Maintenance Tasks and Tests</summary>

- `npm run ts-check` runs Astro's typescript check utility to look for any type issues.
- `npm run format` formats and fixes the whole codebase

</details>

## Commit Guidelines

This project follows the [Conventional Commits][] specification.

Commits should be signed. You can read more about [Commit Signing][] here.

### Commit Message Guidelines

- Commit messages must include a "type" as described on Conventional Commits
- Commit messages **must** start with a capital letter
- Commit messages **must not** end with a period `.`

## Pull Request Policy

This policy governs how contributions should land within this repository. The lines below state the checks and policies to be followed before merging and in the act of merging.

### Before merging

We recommend a review of our [Collaborator Guide](collaborating.md#accepting-modifications) for in-depth details on how we accept contributions into this repository.
The list below describes some merging and approval rules adopted in this repository.

- At least one approval is required for any PR to be merged.

Each contribution is accepted only if there is no objection to it by a collaborator. During the review, collaborators may request that a specific contributor who is an expert in a particular area give an "LGTM" before the PR can be merged.

If an objection is raised in a pull request by another collaborator, all collaborators involved should try to arrive at a consensus by addressing the concerns through discussion, compromise, or withdrawal of the proposed change(s).

### When merging

- All required Status-checks must have passed.
- Please make sure that all discussions are resolved.

[Conventional Commits]: https://www.conventionalcommits.org/
[Commit Signing]: https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits
