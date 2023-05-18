export default function Toolbar ({filters, onSelectFilter, selected}) {
    return (
        <div className="Toolbar" filters={filters} selectedfilter={selected}>
            {Object.entries(filters).map(([index, value]) => <div key={index} onClick={onSelectFilter}>{value}</div>)}
        </div>

    )
}