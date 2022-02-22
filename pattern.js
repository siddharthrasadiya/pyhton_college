str="";

for(i=1;i<=5;i++)
{
	for(j=1;j<=i;j++)
	{
		str+="*";
	}
	str+="\n";
}
console.log(str);




str2="";
for(i=5;i>=0;i--)
{
	for(j=i;j>=0;j--)
	{
		str2+="*";
	}
	str2+="\n";
}
console.log(str2);


str3="";
for(i=1;i<=7;i++)
{
	for(k=i;k<7;k++)
	{
		str3+=" "
	}
	for(j=1;j<=i;j++)
	{
		str3+="*";
	}
	str3+="\n";
}
console.log(str3);


str4="";
for(i=1;i<=7;i++)
{
	for(k=i;k<7;k++)
	{
		str4+=" "
	}
	for(j=1;j<=i;j++)
	{
		str4+="* ";
	}
	str4+="\n";
}
console.log(str4);



num = 8
str5="";
for(i=1;i<=num;i++)
{

	for(j=1;j<=num;j++)
	{
		if(i==1 || i==num || j==1 || j==num )
			str5+="*";
		else
			str5+=" ";
	}
	str5+="\n";
}
console.log(str5);


