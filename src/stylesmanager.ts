export class StylesManager {
  private sheet: CSSStyleSheet = null;
  private static SurveyJSStylesSheetId = "surveyjs";
  public static Styles: { [key: string]: string } = {
    ".sv_qstn": "display: inline-block; vertical-align: top;",
    ".sv_p_container": "display: inline-block; vertical-align: top;",
    ".sv_qbln .checkbox-material": "margin-right: 3px;",
    ".sv_qcbx .checkbox-material": "margin-right: 5px;",
    ".sv_qcbx .checkbox label": "justify-content: left; display: inline-block;",
    ".sv_qstn .radio label": "justify-content: left; display: inline-block;",
    ".sv_qstn label.sv_q_m_label": "position: absolute; margin: 0;",
    ".sv_q_mt_item_value": "float: left;",
    ".sv_qstn.sv_qstn_left": "margin-top: 0.75em;",
    ".sv_qstn .title-left": "float: left; margin-right: 1em;",
    ".sv_qstn .content-left": "overflow: hidden",
    ".sv_q_radiogroup_inline .sv_q_radiogroup_other": "display: inline-block;",
    ".sv_q_checkbox_inline .sv_q_checkbox_other": "display: inline-block;",
    ".sv_q_checkbox_inline, .sv_q_radiogroup_inline": "line-height: 2.5em;",
    ".form-inline .sv_q_checkbox_inline:not(:first-child)": "margin-left: 1em;",
    ".form-inline .sv_q_radiogroup_inline:not(:first-child)":
      "margin-left: 1em;",
    ".sv_qstn fieldset": "border: none; margin: 0; padding: 0;",
    "fieldset.form-inline": "display: inline-block;"
  };

  findSheet() {
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (
        document.styleSheets[i].ownerNode["id"] ===
        StylesManager.SurveyJSStylesSheetId
      ) {
        return <CSSStyleSheet>document.styleSheets[i];
      }
    }
    return null;
  }
  createSheet() {
    let style = document.createElement("style");
    style.id = StylesManager.SurveyJSStylesSheetId;
    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return <CSSStyleSheet>style.sheet;
  }

  constructor() {
    this.sheet = this.findSheet();
    if (!this.sheet) {
      this.sheet = this.createSheet();
      this.initializeStyles();
    }
  }

  public initializeStyles() {
    Object.keys(StylesManager.Styles).forEach(selector =>
      this.sheet.insertRule(
        selector + "{ " + StylesManager.Styles[selector] + " }",
        0
      )
    );
  }
}
