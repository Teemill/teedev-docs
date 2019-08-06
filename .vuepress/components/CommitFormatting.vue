<template>
  <div>
    <p>
      As with all TeeDev repos, you should stick to using the
      <a
        href="https://www.conventionalcommits.org/en/v1.0.0-beta.4/"
        target="_blank"
      >
        Conventional Commits
      </a>
      standard when writing your GitHub commits.
    </p>
    <p>
      The supported prefixes for GitHub commits are:
    </p>
    <table>
      <thead>
        <tr>
          <th>Prefix</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>feat:</td>
          <td>New feature</td>
        </tr>
        <tr>
          <td>fix:</td>
          <td>Fixes bug(s)</td>
        </tr>
        <tr>
          <td>docs:</td>
          <td>Added comments</td>
        </tr>
        <tr>
          <td>refactor:</td>
          <td>Improved existing code</td>
        </tr>
        <tr>
          <td>style:</td>
          <td>Changed existing code to meet style guidelines</td>
        </tr>
        <tr>
          <td>chore:</td>
          <td>Version number changes, builds etc.</td>
        </tr>
      </tbody>
    </table>    
  </div>
</template>

<script>
export default {
  name: 'CommitFormatting',
};
</script>
