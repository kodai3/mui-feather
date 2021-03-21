/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import * as React from 'react';
import * as iconComponents from '../src';
import manifest from './manifest.json';

console.log('iconComponents:', iconComponents);

const Icons = () => {
  return Object.keys(manifest).map((key) => {
    // @ts-ignore
    const files = manifest[key] as string[];

    if (!Array.isArray(files)) return null;

    return (
      <div key={key}>
        <h3>{key}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {files.map((file) => {
            // @ts-ignore
            const Icon = iconComponents[`${file}`];

            if (!Icon) {
              console.log(`icon not found ????${file}`);
              return null;
            }

            return (
              <div
                key={file}
                style={{
                  width: '7.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#d8d8d8',
                  color: 'black',
                  borderRadius: '4px',
                  marginRight: '8px',
                  marginBottom: '8px',
                  padding: '16px',
                }}
              >
                <Icon />
                <label htmlFor="id" style={{ marginTop: '8px' }}>
                  {file}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export default Icons;
