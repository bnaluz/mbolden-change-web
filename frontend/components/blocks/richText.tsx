import { PortableTextBlock } from '@portabletext/types';

import Grid from '../Grid';
import GridItem from '../GridItem';

import PortableTextComponent from '../PortableTextComponent';

type RichTextProps = {
  text: PortableTextBlock[];
  hasPadding?: boolean;
};

export default function RichText({ text, hasPadding = true }: RichTextProps) {
  const content = <PortableTextComponent value={text} />;
  return hasPadding ? (
    <Grid>
      <GridItem desktopSpan={12} mobileSpan={12}>
        <PortableTextComponent value={text} />
      </GridItem>
    </Grid>
  ) : (
    content
  );
}