var React = require('react');
var ReactUltimatePagination = require('react-ultimate-pagination');


function Page(props) {
  return (
    <button
      style={props.isActive ? {fontWeight: 'bold'} : null}
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.isActive ? props.buttonClassName.active : props.buttonClassName.default}
    >{props.value}</button>
  );
}
 
function Ellipsis(props) {
  return <button className={props.buttonClassName.default} onClick={props.onClick} disabled={props.disabled}>...</button>
}
 
function FirstPageLink(props) {
  return <button className={props.buttonClassName.default} onClick={props.onClick} disabled={props.disabled}>First</button>
}
 
function PreviousPageLink(props) {
  return <button className={props.buttonClassName.default} onClick={props.onClick} disabled={props.disabled}>Previous</button>
}
 
function NextPageLink(props) {
  return <button className={props.buttonClassName.default} onClick={props.onClick} disabled={props.disabled}>Next</button>
}
 
function LastPageLink(props) {
  return <button className={props.buttonClassName.default} onClick={props.onClick} disabled={props.disabled}>Last</button>
}
 
function Wrapper(props) {
    const childrenWithProps = React.Children.map(props.children, child =>
        React.cloneElement(child, {buttonClassName: props.className}));
    return <div className="pagination">{childrenWithProps}</div>
}
 
var itemTypeToComponent = {
  'PAGE': Page,
  'ELLIPSIS': Ellipsis,
  'FIRST_PAGE_LINK': FirstPageLink,
  'PREVIOUS_PAGE_LINK': PreviousPageLink,
  'NEXT_PAGE_LINK': NextPageLink,
  'LAST_PAGE_LINK': LastPageLink
};
 
export const UltimatePagination = ReactUltimatePagination.createUltimatePagination({
  itemTypeToComponent: itemTypeToComponent,
  WrapperComponent: Wrapper
});
