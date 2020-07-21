let n1=parseFloat(prompt("Enter The Number 1"));
let n2=parseFloat(prompt("Enter The Number 2"));
let r=0;

let c=prompt("Enter the choice");

function showresult()
{

switch(c)
	{
	case '1':
        r=n1+n2;
        console.log(r);
		break;
	case '2':
        r=n1-n2;
        console.log(r);
		break;
	case '3':
        r=n1*n2;
        console.log(r);
		break;
	case '4': 
        r=n1/n2;
        console.log(r);
		break;
	case '5':
        r=Math.sqrt(n1);
        console.log(r);
        break;
    case '6':
        r=n2*100/n1;
        console.log(r);
        break;
	default:
		break;
			
	}


	

}
showresult();