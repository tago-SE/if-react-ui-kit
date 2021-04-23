import { Heading, TitleHeading } from "../../components/If-Design-System/Layout/Typography/Heading";
import { Block, Container} from '../../components/If-Design-System/Container';
import { ReportPanel } from './ReportPanel';
import SynchronisedCharts  from './Examples/SyncrhonizedChart';
//
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const ReportPage = () => {
    return (
      <Block>
          <Container>
            <Heading size="larger" marginBottom="0px">Reports</Heading>
            {/* <SynchronisedCharts /> */}
            <ReportPanel />
          </Container>
      </Block>
    );
}