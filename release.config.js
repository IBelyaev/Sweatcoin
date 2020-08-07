module.exports = {
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
            '@semantic-release/npm',
            { pkgRoot: './.publish' }
        ],
        '@semantic-release/git'
    ],
    branches: [
        'master'
    ],
    repositoryUrl: 'https://github.com/IBelyaev/Sweatcoin'
};
