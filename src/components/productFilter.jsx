/** 
 define productFilter component
*/
export default class ProductFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  /**
   * filter management for products
   * @param {event} event
   */
  handleFilter(event) {
    this.props.onFilterText(event.target.value);
  }

  /**
   * use when the component is update
   * @returns {JSX.Element} input for the filter
   */
  render() {
    return (
      <div className="filter">
        <input
          id="filter"
          type="text"
          placeholder="filtrer les produits"
          value={this.props.filterText}
          onChange={this.handleFilter}
        />
      </div>
    );
  }
}
