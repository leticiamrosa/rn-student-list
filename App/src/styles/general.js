import metrics from "./metrics";
import colors from "./colors";
import fonts from "./fonts";

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: fonts.title,
    alignSelf: "center",
    marginBottom: metrics.doubleBaseMargin
  },
  sectionText: {
    color: colors.text,
    fontSize: fonts.regular,
  },
  input: {
    height: 50,
    fontSize: fonts.input,
    borderColor: colors.primary,
    borderWidth: 1,
    elevation: 1,
    paddingLeft: 5,
  }
};

export default general;
