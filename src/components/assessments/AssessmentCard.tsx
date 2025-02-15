import mtb_a from '@assets/mtb_assessment.svg'
import {styled} from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import theme, {colors, poppinsFont} from '@style/theme'
import {Assessment} from '@typedefs/types'
import {FunctionComponent} from 'react'
import AssessmentImage from './AssessmentImage'

const StyledCard = styled(Card)(({theme}) => ({
  width: theme.spacing(62),
  height: theme.spacing(100),
  borderTop: `5px solid #EB3B5A`,
  textAlign: 'left',
  // border: '1px solid gray',
  borderRadius: 0,
  padding: 0,

  display: 'flex',
  flexDirection: 'column',
  color: colors.neutralsBlack,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}))

const StyledCardContent = styled(CardContent)(({theme}) => ({
  height: theme.spacing(46),
  overflowY: 'scroll',
  paddingBottom: 0,
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#C4C4C4',
  },
  zIndex: 100,
}))

type AssessmentCardOwnProps = {
  assessment: Assessment
  index: number
}

type AssessmentCardProps = AssessmentCardOwnProps

const AssessmentCard: FunctionComponent<AssessmentCardProps> = ({
  assessment,

  index,
}) => {
  return (
    <StyledCard>
      <AssessmentImage
        resources={assessment.resources}
        variant="normal"
        name={assessment.title}
      />

      <StyledCardContent>
        <Typography
          sx={{
            textTransform: 'uppercase',

            fontSize: '14px',
            paddingBottom: '24px',
          }}>
          {assessment.tags.join(', ')}
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontFamily: poppinsFont,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          {assessment.title}
        </Typography>

        <Typography
          sx={{
            flexGrow: 0,
            fontSize: '14px',
            lineHeight: '18px',

            paddingBottom: 0,
          }}>
          {assessment.summary}
        </Typography>
      </StyledCardContent>
      <CardActions
        sx={{
          marginTop: 0,
          display: 'flex',

          fontSize: '14px',
          padding: theme.spacing(1, 2),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <div>{`${assessment.minutesToComplete} min`} </div>
        <img src={mtb_a} alt="mtb official version" />
      </CardActions>
    </StyledCard>
  )
}

export default AssessmentCard
