function area(r)
{
	return r*r*3.14;
}



module.exports.area=area;



function prime(num)
{
	for(i=2;i<num;i++)
	{
		if(num%i == 0)
		{
			return  1;
			
		}

	}
	return 0;
}
exports.prime = prime;



function pow(n,m)
{
	var p=1
	for(i =1;i<=m;i++)
	{
		p=p*n;
	}
	return p;
}

module.exports.pow = pow;