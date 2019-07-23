<?php
$host = "localhost";
$uname = "nhdie_thuynt";
$pass = "Misg64~5";
$database = "nhdie6px_dktt"; //Change Your Database Name
$conn = new mysqli($host, $uname, $pass, $database);
$filename = 'doantotnghiep.sql'; //How to Create SQL File Step : url:http://localhost/phpmyadmin->detabase select->table select->Export(In Upper Toolbar)->Go:DOWNLOAD .SQL FILE
$op_data = '';
$lines = file($filename);
foreach ($lines as $line)
{
    if (substr($line, 0, 2) == '--' || $line == '')//This IF Remove Comment Inside SQL FILE
    {
        continue;
    }
    $op_data .= $line;
    if (substr(trim($line), -1, 1) == ';')//Breack Line Upto ';' NEW QUERY
    {
        $conn->query($op_data);
        $op_data = '';
    }
}
echo "Table Created Inside " . $database . " Database.......";
?>