/* eslint-disable no-console */
const path = require('path');
const chalk = require('chalk');
const fse = require('fs-extra');
const glob = require('glob');

const SRC_DIR = path.resolve(__dirname, '../src');
const TARGET_DIR = path.resolve(__dirname, '../stories');

function normalizeFileName(file) {
  return path.parse(file).name;
}

function createIconStory(file) {
  const name = normalizeFileName(file);
  const contents = `import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '../src/${name}';

export default {
  title: 'Icons/${name}',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = () => <Icon />;

export const ${name} = Template.bind({});
`;
  return fse.writeFile(path.resolve(TARGET_DIR, `${name}.stories.tsx`), contents, 'utf8');
}

// Generate TypeScript.
async function run() {
  await fse.ensureDir(TARGET_DIR);
  console.log(`\u{1f52c}  Searching for modules inside "${chalk.dim(SRC_DIR)}".`);
  const files = glob.sync('!(index)*.tsx', { cwd: SRC_DIR });
  const stories = files.map((file) => createIconStory(file));
  await Promise.all([...stories]);
  console.log(`\u{1F5C4}  Written typings to ${chalk.dim(TARGET_DIR)}.`);
}

run();
