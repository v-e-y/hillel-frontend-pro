import Link from '../../Link/Link';

/**
 * Sidebar component
 * @param {object} menus - Menus to display
 */
const Sidebar = ({ menus }) => (
    <aside>
        {menus.map((m, i) => (
            <div key={i}>
                <h2>{m.title}</h2>
                <ul>
                    {m.items.map((item, index) => (
                        <li key={index}>
                            <Link to={item.url} text={item.text} />
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
);

export default Sidebar;
