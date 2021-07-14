import { ResponsivePie } from "@nivo/pie";

const margin = { top: 50, right: 110, bottom: 100, left: 100 };

const styles = {
  root: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    position: "relative",
    width: 600,
    height: 400
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: margin.right,
    bottom: 0,
    left: margin.left,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
    textAlign: "center",
    pointerEvents: "none"
  },
  largefont: {
    fontSize: 20,
    marginBottom: 50
  },
  smallfont: {
    fontSize: 15
  }
};



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
    translateX: -20,
    translateY: 160,
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
      id: `${number_of_drinks} energy drink`,
      label: "Carbs in grams from drinks",
      value: `${carbs_from_drink_in_grams}`
    }
  ];

  return (
      <div style={styles.root}>
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
        <div style={styles.overlay}>
          <span style={styles.smallfont}>{total_carbs_in_grams}g / {carb_energy_value}kj</span>
          <span style={styles.largefont}>Carbs needed</span>
          <span style={styles.smallfont}>{total_kcal}</span>
          <span style={styles.largefont}>Total calories</span>
        </div>
      </div>
  );
}


export default PieNivo
