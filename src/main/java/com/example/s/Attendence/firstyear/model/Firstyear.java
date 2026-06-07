package com.example.s.Attendence.firstyear.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Firstyear {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String pinNumber;
    private int june;
    private int july;
    private int august;
    private int september;
    private int october;
    private int november;
    private int december;
    private int january;
    private int february;
    private int march;
    private int april;
    private int may;

    // Getters and Setters
    public int getJune() {
        return june;
    }

    public void setJune(int june) {
        this.june = june;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPinNumber() {
        return pinNumber;
    }

    public void setPinNumber(String pinNumber) {
        this.pinNumber = pinNumber;
    }

    public int getJuly() {
        return july;
    }

    public void setJuly(int july) {
        this.july = july;
    }

    public int getAugust() {
        return august;
    }

    public void setAugust(int august) {
        this.august = august;
    }

    public int getSeptember() {
        return september;
    }

    public void setSeptember(int september) {
        this.september = september;
    }

    public int getOctober() {
        return october;
    }

    public void setOctober(int october) {
        this.october = october;
    }

    public int getNovember() {
        return november;
    }

    public void setNovember(int november) {
        this.november = november;
    }

    public int getDecember() {
        return december;
    }

    public void setDecember(int december) {
        this.december = december;
    }

    public int getJanuary() {
        return january;
    }

    public void setJanuary(int january) {
        this.january = january;
    }

    public int getFebruary() {
        return february;
    }

    public void setFebruary(int february) {
        this.february = february;
    }

    public int getMarch() {
        return march;
    }

    public void setMarch(int march) {
        this.march = march;
    }

    public int getApril() {
        return april;
    }

    public void setApril(int april) {
        this.april = april;
    }

    public int getMay() {
        return may;
    }

    public void setMay(int may) {
        this.may = may;
    }

}
