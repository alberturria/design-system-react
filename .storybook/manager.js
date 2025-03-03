import { addons } from '@storybook/manager-api';
import themeCFPB from './themeCFPB';

addons.setConfig({
  sidebar: {
    renderLabel: ({ name, type }) => {
      if (type === 'story') {
        // Sentence case
        let newName = name.toLowerCase();
        newName = newName[0].toUpperCase() + newName.substr(1);
        return newName;
      }
      return name;
    }
  },
  theme: themeCFPB
});
