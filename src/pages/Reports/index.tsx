import { Heading, TitleHeading } from "../../components/If-Design-System/Layout/Typography/Heading";
import { Block, Container} from '../../components/If-Design-System/Container';
import { ReportPanel } from './ReportPanel';
import SynchronisedCharts  from './Examples/SyncrhonizedChart';
//
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// HighchartsReact 
//                 highcharts={Highcharts}
//                 options={this.state.options}
//                 callback={(chart) => {
//                     this.chart = chart;
//                     if (this.props.callback) {
//                         this.props.callback(chart);
//                     }
//                 }}
//             />



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