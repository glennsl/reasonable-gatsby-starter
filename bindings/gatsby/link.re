external linkClass : ReasonReact.reactClass = "default" [@@bs.module "gatsby-link"];

let make to_::(to_: string) children =>
  ReasonReact.wrapJsForReason
    reactClass::linkClass
    props::{"to": to_}
    children;