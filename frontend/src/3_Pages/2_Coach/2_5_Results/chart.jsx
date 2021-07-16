import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";

const PieChartWrapper = styled.div`
  text-align: center;
  position: relative;
  width: 85%;
  aspect-ratio: 4.05 / 1;
  height: 400px;
  padding: 0;

  .overlay {
    position: absolute;
    top: 0;
    right: 110px;
    bottom: 0;
    left: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000000;
  }
  
  .largeFont {
    font-size: 25px;
    margin-bottom: 50px;
  }
  
  .smallFont {
    font-size: 18px;
  }
`

const margin = { top: 50, right: 110, bottom: 100, left: 100 };

const theme = {
  background: "#ffffff",
  textColor: "#333333",
  fontSize: 15,
  grid: {
    line: {
      stroke: "#555555"
    }
  }
};

const legends = [
  {
    anchor: "left",
    direction: "row",
    justify: false,
    translateX: 190,
    translateY: 200,
    itemsSpacing: 200,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 0.85,
    itemTextColor: "#000000",
    symbolSize: 20,
    effects: [
      {
        on: "hover",
        style: {
          itemOpacity: 1
        }
      }
    ]
  }
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
            startAngle={-200}
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
      </PieChartWrapper>
  );
}


export default PieNivo
