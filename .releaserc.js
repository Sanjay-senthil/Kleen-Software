const envCi = require('env-ci');

const { branch, isCi, isPr, name, pr, prBranch, slug } = envCi();

if (isCi) {
  console.log(`Building repo ${slug} on ${name} service`);
  if (isPr) {
    console.log(
      `Building Pull Request #${pr} originating from branch ${prBranch} and targeting branch ${branch}`,
    );
  } else {
    console.log(`Building branch ${branch}`);
  }
}

const plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  [
    '@semantic-release/changelog',
    {
      changelogFile: 'CHANGELOG.md',
    },
  ],
  [
    '@semantic-release/npm',
    {
      npmPublish: false,
      tarballDir: 'dist',
    },
  ],
  [
    '@semantic-release/git',
    {
      assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
      message: 'chore(release): ${nextRelease.version} [skip-cd]\n\n${nextRelease.notes}',
    },
  ],
];

module.exports = {
  branches: ['main', 'develop'],
  plugins,
  tagFormat: '${version}',
};
