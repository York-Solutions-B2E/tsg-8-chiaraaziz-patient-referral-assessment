package com.example.patient_data.entity;

//import jakarta.persistence.*;

import java.util.Date;

//@Entity
//@Table(name= "patients")
public class Patient {
    //@Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private Date dateOfBirth;
    private String contactInfo;
    private String reasonForReferral;
    private String referralStatus;
    private Date createdAt;
    private Date updatedAt;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public String getReasonForReferral() {
        return reasonForReferral;
    }

    public void setReasonForReferral(String reasonForReferral) {
        this.reasonForReferral = reasonForReferral;
    }

    public String getReferralStatus() {
        return referralStatus;
    }

    public void setReferralStatus(String referralStatus) {
        this.referralStatus = referralStatus;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
