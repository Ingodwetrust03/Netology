export default function Toolbar ({filters, onSelectFilter, selected}) {
    return (
        <div className="Toolbar" filters={filters} selectedfilter={selected}>
            {Object.entries(filters).map(([index, value]) => <div className={selected === value ? 'active' : ''} key={index} onClick={onSelectFilter}>{value}</div>)}
        </div>

    )
}
