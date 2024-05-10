'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
    return text.trim() === '' || !text;
}

export async function shareMeal(formData) {
    const meal = {
      creator: formData.get('name'),
      creator_email: formData.get('email'),
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
    }; 

    if (isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.instructions) || isInvalidText(meal.image) || isInvalidText(meal.creator) || isInvalidText(meal.creator_email) || !meal.creator_email.includes('@') || !meal.image || meal.image.size === 0) {
      throw new Error('Please fill out all fields and provide a valid email address and image.');
    }

    await saveMeal(meal);

    redirect('/meals');
  }