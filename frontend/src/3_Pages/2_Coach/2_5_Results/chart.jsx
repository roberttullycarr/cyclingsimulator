import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";

const PieChartWrapper = styled.div`
  text-align: center;
  position: relative;
  width: 32vw;
  height: 24vw;
  padding: 0;

  .overlay {
    position: absolute;
    top: 0;
    right: 30%;
    bottom: 0;
    left: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000000;
  }
  
  .largeFont {
    font-size: 1vw;
    margin-bottom: 20%;
  }
  
  .smallFont {
    font-size: 0.8vw;
  }
`

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  position: absolute;
  right: -5%;
  top: 90%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 1vw;

  p{
    margin-left: 3%;
    font-size: 0.8vw;
  }
  div{
    height: 100%;
    aspect-ratio: 1 / 1;
  }
  .bl{
    background-color: #377eb8;
  }
  .rd{
    background-color: #e41a1c;
  }
`

const margin = { top: 40, right: 110, bottom: 100, left: 100 };

const theme = {
  background: "#ffffff",
  textColor: "#333333",
  fontSize: '0.8vw',
  grid: {
    line: {
      stroke: "#555555"
    }
  }
};

const legends = [
];

const PieNivo = props => {
  const { total_kcal, total_carbs_in_grams, carb_energy_value, number_of_drinks,
    carbs_from_drink_in_grams, carbs_needed_from_food, slices_of_gingerbread } = props.route

  const data = [
    {
      id: `${slices_of_gingerbread} slices of gingerbread`,
      label: "Carbs in grams from food",
      value: `${carbs_needed_from_food}`
    },
    {
      id: `${number_of_drinks} isotonic drink`,
      label: "Carbs in grams from drinks",
      value: `${carbs_from_drink_in_grams}`
    }
  ];

  return (
      <PieChartWrapper>
        <ResponsivePie
            margin={margin}
            data={data}
            colors={{ scheme: 'set1' }}
            startAngle={-280}
            arcLinkLabelsStraightLength={1}
            arcLinkLabelsTextOffset={1}
            activeOuterRadiusOffset={5}
            arcLabelsTextColor="white"
            innerRadius={0.8}
            enableRadialLabels={false}
            enableSlicesLabels={false}
            theme={theme}
            legends={legends}
        />
        <div className='overlay'>
          <span className='smallFont'>{total_carbs_in_grams}g / {carb_energy_value}kj</span>
          <span className='largeFont'>Carbs needed</span>
          <span className='smallFont'>{total_kcal}</span>
          <span className='largeFont'>Total calories</span>
        </div>
        <BottomWrapper>
          <Wrapper>
            <div className='rd'></div><p>Carbs in grams from food</p>
          </Wrapper>
          <Wrapper>
            <div className='bl'></div><p>Carbs in grams from drinks</p>
          </Wrapper>
        </BottomWrapper>
      </PieChartWrapper>
  );
}


export default PieNivo
