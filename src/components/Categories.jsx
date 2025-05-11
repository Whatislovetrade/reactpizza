const Categories = ({items}) => {
    console.log(items);
    
  return (
    <div className="categories">
        <ul>
            <li className="active">Все</li>
            {
                items.map(name => (
                    <li>{name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Categories