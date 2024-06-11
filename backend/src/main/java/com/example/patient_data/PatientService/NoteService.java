package com.example.patient_data.PatientService;
import java.util.List;
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

   //get note by patient id
   public List<Note> getNoteByPatientId(Integer id) {
    return noteRepository.findAllNotesByPatient_Id(id);
   }


   //get all notes for specific patient
   public Optional <Note> getNotesForPatient(Integer id) {
    return noteRepository.findById(id);

   }
    
}
