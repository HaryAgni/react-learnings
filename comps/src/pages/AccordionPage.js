import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            label : 'ishdifuiuhdfiuhdfiug',
            content:'82384798327984739874i',
            id:'1'
        },
        {
            label : 'iodnriugeiufoi',
            content:'9390920',
            id:'2'
        },
        {
            label : 'ishdifuiuhkjcfniugudfiuhdfiug',
            content:'6532222223',
            id:'3'
        },

    ]
  return (
    <div>
     <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
