package com.example.patient_data.PatientService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.patient_data.PatientRepository.NoteRepository;
import com.example.patient_data.entity.Note;

@Service
public class NoteService {
    private NoteRepository noteRepository;

    @Autowired
   public NoteService(NoteRepository noteRepository) {
       this.noteRepository = noteRepository;
   }

   //save a note
   public Note saveNote(Note note) {
    return noteRepository.save(note);
   }

   //get all notes for specific patient
   public Optional <Note> getNotesForPatient(Integer id) {
    return noteRepository.findById(id);

   }
    
}
