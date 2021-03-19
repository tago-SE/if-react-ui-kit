import { Block, Container} from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Layout/Typography/Heading';
import { GridContainer, GridRow, GridItem } from '../../../components/If-Design-System/Grid';
import { Expandable } from '../../../components/If-Design-System/Expandable';

const QAListBlock = () => {

    const questions = [
      { 
        question: "Can I change jobs at If and work with new things?",
        answer: "Yes, you can! If is open to letting employees change roles and departments, and even within your existing role, your responsibilities will inevitably evolve.",
      },
      { 
        question: "What’s If’s vision?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla sagittis tortor vel bibendum. Fusce ac urna eu felis tristique finibus. Sed pellentesque iaculis massa ac luctus. Aenean ac ullamcorper lacus. Pellentesque sem ipsum, vulputate sit amet orci semper, viverra posuere ligula.",
      },
      { 
        question: "Will I get to travel?",
        answer: "It depends on your role. If is a nordic company, and many of us spend a lot of time working with colleagues in other countries, so some work travel may be necessary. Many employees also participate in events such as conferences, trade shows, and our annual developer hackweeks.",
      },
      { 
        question: "Is If growing??",
        answer: "You bet! 'We have nearly doubled the number of our permanent staff around the world in the last three years.'"
      },
    ]
    
    var index = 1;
    
    return (
      <Block>
      <Container>
        <Heading rank={2} size="medium">Your questions answered!</Heading>
        <GridContainer>
        {
          /*
            TODO: Change so that two questions fit in one row... make it response...
          */  
        }
          <GridRow>
              {questions.map(question => (
                <GridItem xs={12}>
                  <Expandable title={question.question} id={`expandable-${index++}`}>
                    <p className="if">{question.answer}</p>
                  </Expandable>
                </GridItem>
              ))}
          </GridRow>
        </GridContainer>
      </Container>
    </Block>
        
    );
}

export default QAListBlock;