import './table.css'
export default function Table(){


	const downloadTable = () => {
		const tableContent = `
		  <html>
			<head>
			  <title>CME Time Table</title>
			  <style>
				body { font-family: Imprint MT Shadow; }
				table { width: 100%; border-collapse: collapse; }
				th, td { border: 1px solid black; padding: 8px; text-align: center; }
			  </style>
			</head>
			<body>
			  <center style="font-size:40px; font-family: Imprint MT Shadow;">Time Table</center>
			  <hr color="red"/>
			  <br/>
			  <table id="row" border="1" cellpadding="5" cellspacing="3">
				<tr bgcolor="4f4f51">
				  <th colspan="11"><font color="black">CME TIME TABLE(2024-25)</font></th>
				</tr>
				<tr bg bgcolor="#f2c4ce" style={{color:'black'}}>
<th>
DAYS</th>
<th>PERIOD</th>
<th>SHIFT</th>
<td>1 </td>
<td> 2 </td>
<td > 3 </td>
<td >4</td>
<th rowspan="31">LUNCH BREAK</th>
<td> 5 </td><td> 6 </td>
<td> 7</td></tr>
<tr bgcolor="#f2c4ce">

	<th rowSpan="5">MONDAY </th>
	<th rowSpan="2">1 YEAR</th>
    <th> 1 SHIFT</th>
	<td colspan="2">PHYSICS</td>
	<td colSpan="2">CHEMISTRY</td>
	<td colSpan="2">MATHS</td>
	<td>C</td>
	
	
	</tr>
	<tr bgcolor="#f2c4ce">
	<th> 2 SHIFT</th>
	<td colSpan="2">C</td>	
	<td colspan="2">PHYSICS</td>
	<td colSpan="2">ENGLISH</td>
	<td >ACTIVITY</td>
	</tr>
<tr bgcolor="#f2c4ce">
    <th rowSpan="2">4th SEM</th>
    <th> 1 SHIFT</th>
	<td colspan="4">JAVA LAB</td>

	<td colSpan="2">COMP</td>
	<td>JAVA</td>
	
	
	</tr>
	<tr bgcolor="#f2c4ce">
	<th> 2 SHIFT</th>
	<td colSpan="2">WT</td>	
	<td colspan="2">COMP</td>
	<td colSpan="3">CN LAB</td>

	</tr>
	
	<tr bgcolor="#f2c4ce">
	<th rowSpan="1">5th SEM</th>
    <th> 1 SHIFT</th>
	<td colspan="4">JAVA LAB</td>
	<td colSpan="1">JAVA</td>
	<td colSpan="2">IOT</td>
	
	
	
	</tr>
	

	<tr bgcolor="#f2c4ce">

	<th rowSpan="5">TUESDAY </th>
	<th rowSpan="2">1 YEAR</th>
    <th> 1 SHIFT</th>
	<td colSpan="1">MATHS</td>
	<td colspan="2">BCE</td>
	<td colSpan="1">C</td>
	<td colSpan="3">ED</td>
	
	
	
	</tr>
	<tr bgcolor="#f2c4ce">
	<th> 2 SHIFT</th>
	<td colSpan="1">CHEMISTRY</td>	
	<td colspan="3">C LAB</td>
	<td colSpan="1">PHYSICS</td>
	<td colSpan="2">BCE</td>
	</tr>
<tr bgcolor="#f2c4ce">
    <th rowSpan="2">4th SEM</th>
    <th> 1 SHIFT</th>
	<td colSpan="2">WT</td>
	<td colSpan="2">JAVA</td>
	<td colSpan="3">CN LAB</td>
	
	
	
	</tr>
	<tr bgcolor="#f2c4ce">
	<th> 2 SHIFT</th>
	<td colspan="1">SE</td>
<td colSpan="1">COMP</td>
	<td colSpan="2">CN & CS</td>
	<td colSpan="2">JAVA</td>
	<td>ACTIVITY</td>
	
	</tr>
	
	<tr bgcolor="#f2c4ce">
	<th rowSpan="1">5th SEM</th>
    <th> 1 SHIFT</th>
	<td colspan="2">JAVA</td>
	<td colSpan="1">IOT</td>
	<td colSpan="1">SE</td>
	<td colSpan="4">PROJECT WORK</td>
	
	
	</tr>
	
<tr bgcolor="#f2c4ce">
    <th rowspan="5">WEDNESDAY</th>
    <th rowspan="2">1 YEAR</th>
    <th>1 SHIFT</th>
    <td colspan="1">BCE</td>
    <td colspan="1">CHEMISTRY</td>
    <td colspan="2">MATHS</td>
    <td colspan="3">C LAB</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th>2 SHIFT</th>
    <td colspan="1">ENGLISH</td>
    <td colspan="1">ACTIVITY</td>
    <td colspan="2">BCE</td>
    <td colspan="2">MATHS</td>
    <td colspan="1">C</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th rowspan="2">4th SEM</th>
    <th>1 SHIFT</th>
    <td colspan="4">WT LAB</td>
    <td colspan="2">JAVA</td>
    <td colspan="1">ACTIVITY</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th>2 SHIFT</th>
    <td colspan="4">JAVA LAB</td>
    <td colspan="2">CN & CS</td>
    <td colspan="1">WT</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th rowspan="1">5th SEM</th>
    <th>1 SHIFT</th>
    <td colspan="2">JAVA</td>
    <td colspan="2">IOT</td>
    <td colspan="2">IME</td>
    <td colspan="1">PYTHON</td>
</tr>

<tr bgcolor="#f2c4ce">
    <th rowspan="5">THURSDAY</th>
    <th rowspan="2">1 YEAR</th>
    <th>1 SHIFT</th>
    <td colspan="3">C LAB</td>
    <td colspan="1">BCE</td>
    <td colspan="3">PHYSICS & CHEMISTRY</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th>2 SHIFT</th>
    <td colspan="3">PHYSICS & CHEMISTRY</td>
    <td colspan="1">MATHS</td>
    <td colspan="3">CF LAB</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th rowspan="2">4th SEM</th>
    <th>1 SHIFT</th>
    <td colspan="2">COMP</td>
    <td colspan="2">SE</td>
    <td colspan="2">CN & CS</td>
    <td colspan="1">WT</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th>2 SHIFT</th>
    <td colspan="4">WT LAB</td>
    <td colspan="1">JAVA</td>
    <td colspan="2">SE</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th rowspan="1">5th SEM</th>
    <th>1 SHIFT</th>
    <td colspan="4">PYTHON</td>
    <td colspan="1">IOT</td>
    <td colspan="2">PYTHON</td>
</tr>

<tr bgcolor="#f2c4ce">
    <th rowspan="5">FRIDAY</th>
    <th rowspan="2">1 YEAR</th>
    <th>1 SHIFT</th>
    <td colspan="1">ENGLISH</td>
    <td colspan="2">C</td>
    <td colspan="1">BCE</td>
    <td colspan="3">CF LAB</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th>2 SHIFT</th>
    <td colspan="2">CHEMISTRY</td>
    <td colspan="2">C</td>
    <td colspan="3">C LAB</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th rowspan="2">4th SEM</th>
    <th>1 SHIFT</th>
    <td colspan="1">COMP</td>
    <td colspan="3">COMM. SKILL</td>
    <td colspan="1">CN & CS</td>
    <td colspan="2">SE</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th>2 SHIFT</th>
    <td colspan="1">WT</td>
    <td colspan="2">CN & CS</td>
    <td colspan="1">SE</td>
    <td colspan="3">COMM. SKILL</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th rowspan="1">5th SEM</th>
    <th>1 SHIFT</th>
    <td colspan="2">IME</td>
    <td colspan="2">SE</td>
    <td colspan="3">PROJECT</td>
</tr>

<tr bgcolor="#f2c4ce">
    <th rowspan="5">SATURDAY</th>
    <th rowspan="2">1 YEAR</th>
    <th>1 SHIFT</th>
    <td colspan="2">ENGLISH</td>
    <td colspan="1">C</td>
    <td colspan="1">PHYSICS</td>
    <td colspan="3">ACTIVITY</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th>2 SHIFT</th>
    <td colspan="3">ED</td>
    <td colspan="1">BCE</td>
    <td colspan="2">MATHS</td>
    <td colspan="1">ACTIVITY</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th rowspan="2">4th SEM</th>
    <th>1 SHIFT</th>
    <td colspan="2">CN & CS</td>
    <td colspan="2">WT</td>
    <td colspan="2">ACTIVITY</td>
    <td colspan="1">SE</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th>2 SHIFT</th>
    <td colspan="2">JAVA</td>
    <td colspan="2">ACTIVITY</td>
    <td colspan="2">COMP</td>
    <td colspan="1">WT</td>
</tr>
<tr bgcolor="#f2c4ce">
    <th rowspan="1">5th SEM</th>
    <th>1 SHIFT</th>
    <td colspan="1">SE</td>
    <td colspan="3">LIFE SKILL</td>
    <td colspan="2">PYTHON</td>
    <td colspan="1">IME</td>
</tr>


			  </table>
			</body>
		  </html>
		`;
	
		// Create a Blob from the HTML string and trigger the download
		const blob = new Blob([tableContent], { type: 'text/html' });
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = 'CME_Time_Table.html'; // The name of the downloaded file
		link.click();
	  };










return(
<>

<div style={{display:"flex",gap:"100px"}}> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
         
<center style={{fontSize:"40px",fontFamily:"Imprint MT Shadow",marginLeft:"500px",color:"black"}}>time table </center><button onClick={downloadTable} style={{ padding: '10px', fontSize: '16px',width:"260px",backgroundColor:"#021830",marginLeft:"90px" }}>  <i class="fa-solid fa-download"></i>
     
Download Table</button></div>
 <br/>
<hr color="red"/>
<br/><center>
 
	<table   id="row" border="1" cellpadding="5" cellspacing="3"  >

<tr bgcolor="4f4f51"><th colspan={11} > <font color="black">CME TIME TABLE(2024-25) </font></th>
</tr>
<tr bg bgcolor="#f2c4ce" style={{color:'black'}} >
<th>
DAYS</th>
<th>PERIOD</th>
<th>SHIFT</th>
<td>1 </td>
<td> 2 </td>
<td > 3 </td>
<td >4</td>
<th rowspan={31}>LUNCH BREAK</th>
<td> 5 </td><td> 6 </td>
<td> 7</td></tr>
<tr bgcolor="#f2c4ce" style={{color:'black'}}>

	<th rowSpan={5}>MONDAY </th>
	<th rowSpan={2}>1 YEAR</th>
    <th> 1 SHIFT</th>
	<td colspan={2}>PHYSICS</td>
	<td colSpan={2}>CHEMISTRY</td>
	<td colSpan={2}>MATHS</td>
	<td>C</td>
	
	
	</tr>
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th> 2 SHIFT</th>
	<td colSpan={2}>C</td>	
	<td colspan={2}>PHYSICS</td>
	<td colSpan={2}>ENGLISH</td>
	<td >ACTIVITY</td>
	</tr>
<tr bgcolor="#f2c4ce" style={{color:'black'}}>
    <th rowSpan={2}>4th SEM</th>
    <th> 1 SHIFT</th>
	<td colspan={4}>JAVA LAB</td>

	<td colSpan={2}>COMP</td>
	<td>JAVA</td>
	
	
	</tr>
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th> 2 SHIFT</th>
	<td colSpan={2}>WT</td>	
	<td colspan={2}>COMP</td>
	<td colSpan={3}>CN LAB</td>

	</tr>
	
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th rowSpan={1}>5th SEM</th>
    <th> 1 SHIFT</th>
	<td colspan={4}>JAVA LAB</td>
	<td colSpan={1}>JAVA</td>
	<td colSpan={2}>IOT</td>
	
	
	
	</tr>
	

	<tr bgcolor="#f2c4ce" style={{color:'black'}}>

	<th rowSpan={5}>TUESDAY </th>
	<th rowSpan={2}>1 YEAR</th>
    <th> 1 SHIFT</th>
	<td colSpan={1}>MATHS</td>
	<td colspan={2}>BCE</td>
	<td colSpan={1}>C</td>
	<td colSpan={3}>ED</td>
	
	
	
	</tr>
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th> 2 SHIFT</th>
	<td colSpan={1}>CHEMISTRY</td>	
	<td colspan={3}>C LAB</td>
	<td colSpan={1}>PHYSICS</td>
	<td colSpan={2}>BCE</td>
	</tr>
<tr bgcolor="#f2c4ce" style={{color:'black'}}>
    <th rowSpan={2}>4th SEM</th>
    <th> 1 SHIFT</th>
	<td colSpan={2}>WT</td>
	<td colSpan={2}>JAVA</td>
	<td colSpan={3}>CN LAB</td>
	
	
	
	</tr>
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th> 2 SHIFT</th>
	<td colspan={1}>SE</td>
<td colSpan={1}>COMP</td>
	<td colSpan={2}>CN & CS</td>
	<td colSpan={2}>JAVA</td>
	<td>ACTIVITY</td>
	
	</tr>
	
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th rowSpan={1}>5th SEM</th>
    <th> 1 SHIFT</th>
	<td colspan={2}>JAVA</td>
	<td colSpan={1}>IOT</td>
	<td colSpan={1}>SE</td>
	<td colSpan={4}>PROJECT WORK</td>
	
	
	</tr>
	


	<tr bgcolor="#f2c4ce" style={{color:'black'}}>

	<th rowSpan={5}>WEDNESDAY </th>
	<th rowSpan={2}>1 YEAR</th>
    <th> 1 SHIFT</th>
	<td colSpan={1}>BCE</td>
	<td colspan={1}>CHEMISTRY</td>
	<td colSpan={2}>MATHS</td>
	<td colSpan={3}>C LAB</td>
	
	
	
	</tr>
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th> 2 SHIFT</th>
	<td colSpan={1}>ENGLISH</td>	
	
	<td colSpan={1}>ACTIVITY</td>
	<td colSpan={2}>BCE</td>
	<td colspan={2}>MATHS</td>
	<td colspan={1}>C</td>
	</tr>
<tr bgcolor="#f2c4ce" style={{color:'black'}}>
    <th rowSpan={2}>4th SEM</th>
    <th> 1 SHIFT</th>
	<td colSpan={4}>WT LAB</td>
	<td colSpan={2}>JAVA</td>
	<td colSpan={1}>ACTIVITY</td>
	
	
	
	</tr>
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th> 2 SHIFT</th>
	<td colspan={4}>JAVA LAB</td>

	<td colSpan={2}>CN & CS</td>
	<td colSpan={1}>WT</td>
	
	</tr>
	
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th rowSpan={1}>5th SEM</th>
    <th> 1 SHIFT</th>
	<td colspan={2}>JAVA</td>
	<td colSpan={2}>IOT</td>
	<td colSpan={2}>IME</td>
	<td colSpan={1}>PYTHON</td>
	
	
	</tr>



	
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>

	<th rowSpan={5}>THURSDAY</th>
	<th rowSpan={2}>1 YEAR</th>
    <th> 1 SHIFT</th>
	<td colSpan={3}>C LAB</td>
	<td colSpan={1}>BCE</td>
	<td colspan={3}>PHYSIC & CHEMISTRY</td>
	

	
	
	
	</tr>
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th> 2 SHIFT</th>
	<td colSpan={3}>PHYSIC & CHEMISTRY</td>	
	
	<td colSpan={1}>MATHS</td>
	<td colspan={3}>CF LAB</td>
	</tr>
<tr bgcolor="#f2c4ce" style={{color:'black'}}>
    <th rowSpan={2}>4th SEM</th>
    <th> 1 SHIFT</th>
	<td colSpan={2}>COMP</td>
	<td colSpan={2}>SE</td>
	<td colSpan={2}>CN & CS</td>
	<td colSpan={1}>WT</td>
	
	
	
	</tr>
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th> 2 SHIFT</th>
	<td colspan={4}>WT LAB</td>

	<td colSpan={1}>JAVA</td>
	<td colSpan={2}>SE</td>
	
	</tr>
	
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>
	<th rowSpan={1}>5th SEM</th>
    <th> 1 SHIFT</th>
	<td colspan={4}>PYTHON</td>
	<td colSpan={1}>IOT</td>

	<td colSpan={2}>PYTHON</td>
	
	
	</tr>

  

  
	<tr bgcolor="#f2c4ce" style={{color:'black'}}>

<th rowSpan={5}>FRIDAY</th>
<th rowSpan={2}>1 YEAR</th>
<th > 1 SHIFT</th>
<td colSpan={1}>ENGLISH</td>
<td colSpan={2}>C</td>
<td colspan={1}>BCE</td>
<td colspan={3}>CF LAB</td>






</tr>
<tr bgcolor="#f2c4ce" style={{color:'black'}}>
<th> 2 SHIFT</th>
<td colSpan={2}>CHEMISTRY</td>	

<td colSpan={2}>C</td>
<td colspan={3}>C LAB</td>
</tr>
<tr bgcolor="#f2c4ce" style={{color:'black'}}>
<th rowSpan={2}>4th SEM</th>
<th> 1 SHIFT</th>
<td colSpan={1}>COMP</td>
<td colSpan={3}>COMM. SKILL</td>
<td colSpan={1}>CN & CS</td>
<td colSpan={2}>SE</td>



</tr>
<tr bgcolor="#f2c4ce" style={{color:'black'}}>
<th> 2 SHIFT</th>
<td colspan={1}>WT</td>

<td colSpan={2}>CN & CS</td>
<td colSpan={1}>SE</td>
<td colSpan={3}>COMM. SKILL</td>

</tr>

<tr bgcolor="#f2c4ce" style={{color:'black'}}>
<th rowSpan={1}>5th SEM</th>
<th> 1 SHIFT</th>
<td colspan={2}>IME</td>
<td colSpan={2}>SE</td>

<td colSpan={3}>PROJECT</td>


</tr>







<tr bgcolor="#f2c4ce" style={{color:'black'}}>

<th rowSpan={5}>SATURDAY</th>
<th rowSpan={2}>1 YEAR</th>
<th> 1 SHIFT</th>
<td colSpan={2}>ENGLISH</td>
<td colSpan={1}>C</td>
<td colspan={1}>PHYSIC</td>
<td colSpan={3}>ACTIVITY</td>




</tr>
<tr bgcolor="#f2c4ce" style={{color:'black'}}>
<th> 2 SHIFT</th>
<td colSpan={3}>ED</td>	

<td colSpan={1}>BCE</td>
<td colspan={2}>MATHS</td>
<td colSpan={1}>ACTIVITY</td>
</tr>
<tr  bgcolor="#f2c4ce" style={{color:'black'}}>
<th rowSpan={2}>4th SEM</th>
<th> 1 SHIFT</th>
<td colSpan={2}>CN &  CS</td>
<td colSpan={2}>WT</td>
<td colSpan={2}>ACTIVITY</td>
<td colSpan={1}>SE</td>



</tr>
<tr bgcolor="#f2c4ce" style={{color:'black'}}>
<th> 2 SHIFT</th>
<td colspan={2}>JAVA</td>

<td colSpan={2}>ACTIVITY</td>
<td colSpan={2}>COMP</td>
<td colSpan={1}>WT</td>

</tr>

<tr bgcolor="#f2c4ce" style={{color:'black'}}>
<th rowSpan={1}>5th SEM</th>
<th> 1 SHIFT</th>
<td colSpan={1}>SE</td>
<td colspan={3}>LIFE SKILL</td>
<td colSpan={2}>PYTHON</td>
<td colSpan={1}>IME</td>


</tr>


</table><br/><br/>
          </center>

</>);
}