package com.example.patient_data.PatientRepository;
import com.example.patient_data.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Patient, Integer> {
}