import Grid from '@/components/Grid';
import GridItem from '@/components/GridItem';

export default function TestPage() {
  return (
    <Grid>
      <GridItem desktopSpan={12} mobileSpan={2}>
        <div>Hello</div>
      </GridItem>
      <GridItem desktopSpan={1} mobileSpan={2}>
        <div>Hello</div>
      </GridItem>
      <GridItem desktopSpan={4} mobileSpan={2}>
        <div>Hello</div>
      </GridItem>
    </Grid>
  );
}
