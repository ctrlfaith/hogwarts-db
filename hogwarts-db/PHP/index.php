<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM hpcharactersinfo";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[4]) && is_numeric($path[4])) {
            $sql .= " WHERE ID = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $characters = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $characters = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($characters);
        break;

    case "POST":
        $character = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO hpcharactersinfo (CharacterName, ActorName, House, RoleType, FirstAppearance, FinalAppearance, WandType, BloodStatus, Occupation, Species, Pet, Skills, BirthDate, Parents, Gender) 
                VALUES (:CharacterName, :ActorName, :House, :RoleType, :FirstAppearance, :FinalAppearance, :WandType, :BloodStatus, :Occupation, :Species, :Pet, :Skills, :BirthDate, :Parents, :Gender)";
        
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':CharacterName', $character->CharacterName);
        $stmt->bindParam(':ActorName', $character->ActorName);
        $stmt->bindParam(':House', $character->House);
        $stmt->bindParam(':RoleType', $character->RoleType);
        $stmt->bindParam(':FirstAppearance', $character->FirstAppearance);
        $stmt->bindParam(':FinalAppearance', $character->FinalAppearance);
        $stmt->bindParam(':WandType', $character->WandType);
        $stmt->bindParam(':BloodStatus', $character->BloodStatus);
        $stmt->bindParam(':Occupation', $character->Occupation);
        $stmt->bindParam(':Species', $character->Species);
        $stmt->bindParam(':Pet', $character->Pet);
        $stmt->bindParam(':Skills', $character->Skills);
        $stmt->bindParam(':BirthDate', $character->BirthDate);
        $stmt->bindParam(':Parents', $character->Parents);
        $stmt->bindParam(':Gender', $character->Gender);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $character = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE hpcharactersinfo SET CharacterName = :CharacterName, ActorName = :ActorName, House = :House, 
                RoleType = :RoleType, FirstAppearance = :FirstAppearance, FinalAppearance = :FinalAppearance, 
                WandType = :WandType, BloodStatus = :BloodStatus, Occupation = :Occupation, Species = :Species, 
                Pet = :Pet, Skills = :Skills, BirthDate = :BirthDate, Parents = :Parents, Gender = :Gender 
                WHERE ID = :ID";
        
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':ID', $character->ID);
        $stmt->bindParam(':CharacterName', $character->CharacterName);
        $stmt->bindParam(':ActorName', $character->ActorName);
        $stmt->bindParam(':House', $character->House);
        $stmt->bindParam(':RoleType', $character->RoleType);
        $stmt->bindParam(':FirstAppearance', $character->FirstAppearance);
        $stmt->bindParam(':FinalAppearance', $character->FinalAppearance);
        $stmt->bindParam(':WandType', $character->WandType);
        $stmt->bindParam(':BloodStatus', $character->BloodStatus);
        $stmt->bindParam(':Occupation', $character->Occupation);
        $stmt->bindParam(':Species', $character->Species);
        $stmt->bindParam(':Pet', $character->Pet);
        $stmt->bindParam(':Skills', $character->Skills);
        $stmt->bindParam(':BirthDate', $character->BirthDate);
        $stmt->bindParam(':Parents', $character->Parents);
        $stmt->bindParam(':Gender', $character->Gender);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM hpcharactersinfo WHERE ID = :ID";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':ID', $path[4]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
