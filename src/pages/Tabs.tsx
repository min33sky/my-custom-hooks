import useTabs from '../hooks/useTabs';

export const contents = [
  {
    tab: 'Section 1',
    content: `This is Section 1 content`,
  },
  {
    tab: 'Section 2',
    content: `This is Section 2 content`,
  },
  {
    tab: 'Section 3',
    content: `This is Section 3 content`,
  },
];

function Tabs() {
  const { currentItem, changeItem } = useTabs(0, contents);

  return (
    <div>
      <h2>useTabs Hook</h2>
      {contents.map((item, idx) => (
        <button type="button" key={item.tab} onClick={() => changeItem(idx)}>
          {item.tab}
        </button>
      ))}
      <p>{currentItem.content}</p>
    </div>
  );
}

export default Tabs;
