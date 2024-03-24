import React from "react";

import { motion, useScroll } from "framer-motion";

import AboutHeading from "../components/aboutHeading";
import InfoCard from "../components/infoCard";
import PeopleCard from "../components/peopleCard";

export default function About() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      {/* SCROLL BAR*/}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed w-[100vw] shadow-lg h-1 bg-primary/80 top-20 z-10"
      />
      {/* MAIN CONTAINER */}
      <div className="px-5 overflow-x-hidden md:px-20">
        {/* HEADING */}
        <motion.div
          className="relative flex items-center justify-center h-[45vh] lg:max-w-[80%] m-auto my-56"
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
        >
          {/* CUSTOM BG THINGY */}
          <div className="absolute z-10 bg-primary h-[400px] lg:w-[800px] lg:h[800px] w-[400px] left-[40%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40rem] pointer-events-none opacity-25 dark:opacity-20"></div>
          <div className="absolute z-10 bg-orange-700 h-[400px] lg:w-[800px] lg:h[800px] w-[400px] left-[60%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40rem] pointer-events-none opacity-20 dark:opacity-20"></div>
          {/* HEADING COMPONENT */}
          <AboutHeading />
        </motion.div>
        {/* ABOUT US */}
        <h2 className="pb-2 text-4xl md:text-6xl font-medium tracking-tight scroll-m-20 first:mt-0 drop-shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] mb-8 text-center">
          Informazioni su di noi
        </h2>
        {/* SUBJECTS*/}
        <div className="mb-32 space-y-10">
          <InfoCard
            title="Informatica"
            src="https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            par="              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              provident? Rerum consequuntur beatae veritatis tenetur,
              doloremque, fuga iure quo incidunt dolor perferendis quos
              exercitationem est reprehenderit enim labore, eveniet animi. Ipsam
              ad quia ipsum ab impedit velit rerum debitis, reprehenderit,
              eveniet corporis officiis, vitae fugit quos laborum ut officia
              obcaecati sapiente commodi possimus eligendi modi et voluptate!
              Deserunt, fugit voluptatem?"
          />
          <InfoCard
            title="Elettronica e Robotica"
            src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            par="              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              provident? Rerum consequuntur beatae veritatis tenetur,
              doloremque, fuga iure quo incidunt dolor perferendis quos
              exercitationem est reprehenderit enim labore, eveniet animi. Ipsam
              ad quia ipsum ab impedit velit rerum debitis, reprehenderit,
              eveniet corporis officiis, vitae fugit quos laborum ut officia
              obcaecati sapiente commodi possimus eligendi modi et voluptate!
              Deserunt, fugit voluptatem?"
          />
          <InfoCard
            title="Scientifico"
            src="https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            par="              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              provident? Rerum consequuntur beatae veritatis tenetur,
              doloremque, fuga iure quo incidunt dolor perferendis quos
              exercitationem est reprehenderit enim labore, eveniet animi. Ipsam
              ad quia ipsum ab impedit velit rerum debitis, reprehenderit,
              eveniet corporis officiis, vitae fugit quos laborum ut officia
              obcaecati sapiente commodi possimus eligendi modi et voluptate!
              Deserunt, fugit voluptatem?"
          />
        </div>
        {/* SCHOOL */}
        <div className="flex flex-col xl:grid xl:grid-cols-2 xl:space-x-8">
          <h2 className="order-1 pb-6 text-4xl font-normal tracking-tight text-center md:text-6xl scroll-m-20 first:mt-0 xl:col-span-2">
            La nostra scuola
          </h2>
          <h4 className="order-3 col-span-2 mt-6 mb-8 text-xl font-medium tracking-tight text-justify xl:order-2 lg:px-40 md:text-center scroll-m-20">
            La scuola viene istituita nell' A. S. 1960 /61 come succursale
            dell'I.T.I.S. "E. Fermi" di Roma all'epoca esistevano solo tre
            sezioni: la sezione A di 37 alunni la sezione B di 37 alunni la
            sezione C di 39 alunni le quali erano seguite dal Prof. Diana
            Umberto.
          </h4>
          <div className="order-3 overflow-scroll text-justify">
            <p className="leading-6 [&:not(:first-child)]:mt-4 text-pretty text-foreground/95">
              Il quale è stato il coordinatore con la partecipazione dell'
              I.T.I.S. E. Fermi di Roma per l' avvio e la gestione iniziale
              della scuola. Tutti i comuni a sud di Roma come ad esempio i
              Castelli , Colleferro ecc. insieme ad alcuni comuni della
              provincia di Latina, fino a giungere a Terracina, rappresentano il
              bacino d 'utenza dell' attuale I.T.I.S. "Giancarlo Vallauri" di
              Velletri. Inizialmente l'Istituto si appoggiò presso l' I.T.C.G.
              "Cesare Battisti" , per passare poi dal palazzo comunale ad una
              villetta non troppo distante l'ospedale di Velletri. Nel mese di
              novembre dell'anno 1965 l'I.T.I.S. Vallauri, si trasferì
              definitivamente presso la sede attuale di via Salvo D' Acquisto.
              Nell' A. S. 1968 / 69 divenne istituto autonomo e prese per
              l'appunto il nome dell' ingegnere "Giancarlo Vallauri".
            </p>
            <p className="leading-6 [&:not(:first-child)]:mt-4 text-pretty text-foreground/95">
              Dalla sua autonomia ad oggi, più di cinquemila sono stati gli
              studenti diplomati. Questo perché il numero delle sezioni e degli
              alunni è progressivamente cresciuto nel corso del tempo; fino a
              raggiungere, un numero complessivo di 53 classi, 14 di esse sono
              state ospitate nella sede staccata di via Paolina a Velletri.
            </p>
            <p className="leading-6 [&:not(:first-child)]:mt-4 text-pretty text-foreground/95">
              La scuola dispone inoltre di diversi laboratori, dove gli alunni
              possono predisporre numerose esperienze. Al tempo stesso, dopo
              l'entrata in vigore dei bacini di utenza, (DISTRETTO N°39/42) si è
              precisata e definita l'area geografica dell'I.T.I.S. "G.
              Vallauri": gli allievi provengono ,infatti, prevalentemente da
              Lariano, Genzano, Albano, Ariccia, Lanuvio, Cecchina, S.Maria
              delle Mole, Castel Gandolfo, Ciampino, Cisterna e Artena oltre che
              , come ovvio, dalla stessa Velletri.
            </p>
            <p className="leading-6 [&:not(:first-child)]:mt-4 text-pretty text-foreground/95">
              Alla iniziale specializzazione in Elettronica Industriale si sono
              affiancati, più di recente nuovi corsi (INFORMATICA e LICEO
              SCIENTIFICO TECNOLOGICO), ciò nell'intento di rispondere con
              sempre maggiore efficacia alla domanda e alle legittime esigenze
              del mondo del lavoro che, alla scuola chiede un continuo sforzo di
              aggiornamento per adeguare i futuri periti all'apprendimento e
              all'uso delle nuove tecnologie.
            </p>
          </div>
          <div className="flex flex-col self-center order-2 align-items-center *:m-auto space-y-8 xl:order-3">
            <img
              src="https://statics.cedscdn.it/photos/MED_HIGH/47/45/5794745_1122_luciano_sciurba_1.jpg"
              className="rounded-sm shadow-md lg:w-8/12 shadow-primary"
            />
            <img
              src="https://www.itisvallauri.net/meteo/img/scuola1.jpg"
              className="hidden w-6/12 rounded-sm shadow-md xl:block shadow-primary"
            />
          </div>
        </div>
        {/* TIMELINE */}
        <div className="my-24 space-y-4 lg:columns-3">
          <InfoCard
            title="Fondazione scuola"
            par="La scuola viene istituita nell' A. S. 1960 /61 come succursale dell'I.T.I.S. `E. Fermi` di Roma all'epoca esistevano solo tre sezioni."
            sub="Settembre 1960"
          />
          <InfoCard
            title="Trasferimento sede"
            par="Nel mese di novembre dell'anno 1965 l'I.T.I.S. Vallauri, si trasferì definitivamente presso la sede attuale di via Salvo D' Acquisto."
            sub="Novembre 1965"
          />
          <InfoCard
            title="Ridenominazione istituto"
            par="Nell' A. S. 1968 / 69 divenne istituto autonomo e prese per l'appunto il nome dell' ingegnere `Giancarlo Vallauri`."
            sub="Settembre 1968"
          />
        </div>
        <h2 className="pb-2 text-4xl md:text-6xl font-medium tracking-tight scroll-m-20 first:mt-0 drop-shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] mb-8 text-center">
          Partecipanti al progetto
        </h2>
        {/* PROF */}
        <PeopleCard
          title="Professori"
          people={[
            { name: "Bonifazi Andrea", subj: "Informatica" },
            { name: "Rispoli Maria", subj: "Informatica" },
          ]}
          single={true}
        />
        {/* STUDENTS */}
        <div className="mt-8 mb-96 md:mb-40 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 h-[40vh]">
          <PeopleCard
            title="Professori"
            people={[
              { name: "Bonifazi Andrea", subj: "Informatica" },
              { name: "Rispoli Maria", subj: "Informatica" },
            ]}
            className="hidden lg:block"
          />
          <PeopleCard
            title="Studenti Informatica"
            people={[
              { name: "Boaretto Lorenzo", subj: "Informatica" },
              { name: "Cipolla Emilio", subj: "Informatica" },
              { name: "Fonti Luca", subj: "Informatica" },
              { name: "Fruncillo Carmine", subj: "Informatica" },
              { name: "Imbastari Riccardo", subj: "Informatica" },
              { name: "Pietrosanti Francesco", subj: "Informatica" },
              { name: "Somma Francesco", subj: "Informatica" },
            ]}
          />
          <PeopleCard
            title="Studenti Scientifico"
            people={[
              { name: "Bastianelli Tommaso", subj: "Scientifico" },
              { name: "Crespi Edoardo", subj: "Scientifico" },
              { name: "Masi Gabriele", subj: "Scientifico" },
            ]}
          />
        </div>
        {/* LOCATION */}
        <h2 className="pb-2 text-4xl md:text-6xl font-medium tracking-tight scroll-m-20 first:mt-0 drop-shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] mb-8 text-center">
          Dove ci troviamo
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.041446606841!2d12.772633392988878!3d41.676448303931465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13259d347813ad7d%3A0x973948516bf1e19f!2sITIS%20Giancarlo%20Vallauri!5e0!3m2!1sit!2sit!4v1709122165121!5m2!1sit!2sit"
          style={{ border: "0" }}
          className="m-auto w-[80%] lg:w-[40%] aspect-square"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
